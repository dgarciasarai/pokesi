import { h } from 'hyperapp'
import Link from './link'
import gluten from '../img/gluten.png'

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
                <div class="ingredient__allergens">
                  {ingredient.hasGluten && <img class="ingredient__gluten" src={gluten} />}
                </div>
                <img class="ingredient__image" src={ingredient.image}/>
                <div class="ingredient-cell">
                  <span class="ingredient__name">{ingredient.name}</span>
                  <span class="ingredient__weight">{ingredient.weight}g</span>
                </div>
                <div class="ingredient-quantity">
                  <span class="quantity__minus">-</span>
                  <span class="quantity__total">0</span>
                  <span class="quantity__more">+</span>
                </div>
              </Link>
            </li>
          )}</ul>
      </div>
      <div class="ingridients-resume">
        <Link actions={actions} class="resume__link" href={`/summary`}>Resumen</Link>
      </div>
    </div>
  )
}

export { IngredientList }
export default IngredientList
