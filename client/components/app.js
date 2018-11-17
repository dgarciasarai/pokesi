import IngredientDetail from './ingredient-detail'
import IngredientList from './ingredient-list'
import Summary from './summary'
import { listenToHistoryEvents } from '../to-do/navigation'

let locationListener;

function app(state, actions) {
  const pathname = state.route.pathname
  let view = IngredientList

  if (pathname === '/summary') {
    view = Summary
  } else if (/\/ingredients\/([a-z0-9-]+)/i.test(pathname)) {
    view = IngredientList
  }

  if (!locationListener) {
    locationListener = () => actions.updatePathname(window.location.pathname)
    listenToHistoryEvents(locationListener)
  }

  return view(state, actions)
}

export { app }
export default app
