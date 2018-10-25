import { h } from 'hyperapp'
import Link from './link'

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
              <Link actions={actions} class="ingredient__link" href={`/ingredients/${ingredient.slug}`}>
                <img class="ingredient__image" src={ingredient.image}/>
                <span class="ingredient__name">{ingredient.name}</span>
              </Link>
            </li>
          )}</ul>
      </div>
    </div>
  )
}

export { IngredientList }
export default IngredientList
