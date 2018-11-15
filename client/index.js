import './index.html'
import './404.html'
import './sanitize.css'
import './styles.css'
import './fonts/BebasNeue-Regular.otf'
import './fonts/BebasNeue-Regular.ttf'

import 'babel-polyfill'
import { h, app } from 'hyperapp'

import { app as appView } from './components/app'
import initialState from './utils/initial-state'
import { registerServiceWorker } from './to-do/service-worker'

import { goTo, goBack, updatePathname } from './actions/go-to';
import { loadIngredients, loadIngredientsSuccess } from './actions/ingredients'

const actions = {
  goTo,
  goBack,
  updatePathname,
  loadIngredients,
  loadIngredientsSuccess
};

app(initialState, actions, appView, document.body)
registerServiceWorker()
