import { h } from 'hyperapp'

function IngredientList (state, actions) {
  if (state.ingredients && !state.ingredients.length) {
    actions.loadIngredients()
  }

  return (
    <ul>{state.ingredients.map(ingredient => <li>{ingredient.name}</li>)}</ul>
  )
}

export { IngredientList }
export default IngredientList
