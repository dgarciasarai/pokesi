import IngredientDetail from './ingredient-detail'
import IngredientList from './ingredient-list'
import Summary from './summary'

let locationListener;

function app(state, actions) {
  const pathname = state.route.pathname
  let view = IngredientList

  if (pathname === '/summary') {
    view = Summary
  } else if (/\/ingredients\/([a-z0-9-]+)/i.test(pathname)) {
    view = IngredientDetail
  }

  if (!locationListener) {
    locationListener = () => actions.updatePathname(window.location.pathname)
    window.addEventListener('popstate', locationListener);
  }

  return view(state, actions)
}

export { app }
export default app
