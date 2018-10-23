import IngredientDetail from './components/ingredient-detail'
import IngredientList from './components/ingredient-list'
import Summary from './components/summary'

function app(state, actions) {
  const pathname = state.route.pathname
  let view = IngredientList

  if (pathname === '/summary') {
    view = Summary
  } else if (/\/ingredients\/([a-z0-9-]+)/i.test(pathname)) {
    view = IngredientDetail
  }

  return view(state, actions)
}

export { app }
export default app
