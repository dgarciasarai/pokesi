import { h } from 'hyperapp'

function IngredientList (state, actions) {
  if (state.ingredients && !state.ingredients.length) {
    actions.loadIngredients()
  }

  return (
    <div>
      <div class="header"><span>POKE</span><span class="header-si">SI</span></div>
      <div class="ingredients">
        <p>Selecciona tus ingredientes</p>
        <ul class="ingredients-list">{state.ingredients.map(ingredient =>
            <li class="ingredient-item">
              <img class="ingredient-image" src={ingredient.image}/>
              <span class="ingredient-name">{ingredient.name}</span>
            </li>
          )}</ul>
      </div>
    </div>
  )
}

export { IngredientList }
export default IngredientList