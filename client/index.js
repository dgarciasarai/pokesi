import 'babel-polyfill'
import { h, app } from 'hyperapp'

import IngredientDetail from './components/ingredient-detail'
import IngredientList from './components/ingredient-list'
import Summary from './components/summary'

import { api } from './utils/api'

const state = {
  ingredients: [],

  route: {
    pathname: window.location.pathname
  }
}

const actions = {
  goTo: pathname => state => {
    window.history.pushState(null, null, pathname)
    return { route: { pathname } }
  },

  loadIngredients: () => async (state, actions) => {
    try {
      const response = await api('/ingredients');
      const ingredients = await response.json();
      actions.loadIngredientsSuccess(ingredients);
    } catch (error) {
      console.error(error)
    }

    return { ingredients: null }
  },

  loadIngredientsSuccess: ingredients => () => {
    return { ingredients }
  }
}

const view = (state, actions) => {
  const pathname = state.route.pathname
  let view = IngredientList

  if (pathname === '/summary') {
    view = Summary
  } else if (/\/ingredients\/([a-z0-9-]+)/i.test(pathname)) {
    view = IngredientDetail
  }

  return view(state, actions)
}

app(state, actions, view, document.body)
