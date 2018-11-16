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
                  {ingredient.hasGluten && <img alt={`El ingrediente ${ingredient.name} contiene gluten`} class="ingredient__gluten" src={gluten} />}
                </div>
                <img
                  alt={ingredient.name}
                  class="ingredient__image"
                  src={ingredient.image}
                />
                <div class="ingredient-cell">
                  <span class="ingredient__name">{ingredient.name}</span>
                  <span class="ingredient__weight">{ingredient.weight}g</span>
                </div>
              </Link>
              <div class="ingredient-quantity">
                <button class="quantity__minus" type="button" onclick={() => actions.removeIngredient(ingredient.slug)}>-</button>
                <span class="quantity__total">{state.ingredientsSummary[ingredient.slug] || 0}</span>
                <button class="quantity__more" type="button" onclick={() => actions.addIngredient(ingredient.slug)}>+</button>
              </div>
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
