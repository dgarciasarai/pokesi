import 'babel-polyfill'
import { h, app } from 'hyperapp'

import { app as appView } from './components/app'
import initialState from './utils/initial-state'

import { goTo, updatePathname } from './actions/go-to';
import { loadIngredients, loadIngredientsSuccess } from './actions/ingredients'

const actions = {
  goTo,
  updatePathname,
  loadIngredients,
  loadIngredientsSuccess
};

app(initialState, actions, appView, document.body)
