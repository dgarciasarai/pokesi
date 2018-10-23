import { h } from 'hyperapp'

function IngredientList (state, actions) {
  if (state.ingredients && !state.ingredients.length) {
    actions.loadIngredients()
  }

  return (
    <div>
      <div class="header">POKESI</div>
      <div class="ingredients">
        <p>Selecciona tus ingredientes</p>
        <ul class="ingredients-list">{state.ingredients.map(ingredient =>
            <li class="ingredient-element">
              <img class="ingredient-image" src={ingredient.image}/>
              {ingredient.name}
            </li>
          )}</ul>
      </div>
    </div>
  )
}

export { IngredientList }
export default IngredientList