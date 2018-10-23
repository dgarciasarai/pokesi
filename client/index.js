import 'babel-polyfill'
import { h, app } from 'hyperapp'

import initialState from './utils/initial-state'

import { goTo } from './actions/go-to';
import { loadIngredients, loadIngredientsSuccess } from './actions/ingredients'

const actions = {
  goTo,
  loadIngredients,
  loadIngredientsSuccess
};

app(initialState, actions, app, document.body)
