import { h } from 'hyperapp'
import Link, { goBack } from './link';
import Header from './header';

function Summary (state, actions) {
  if (state.ingredients && !state.ingredients.length) {
    actions.loadIngredients()
    return ''
  }

  return <div>
    <Header
      actions={actions}
      showBackButton
    />

    <div class="ingredients">
      <p class="ingredients__intro">Tu resumen:</p>

      <ul class="ingredients-list ingredient-list--summary">{
        state.ingredients
          .filter(ingredient => state.ingredientsSummary[ingredient.slug])
          .map(ingredient =>
        <li class="ingredient-item">
          <Link actions={actions} class="ingredient__link" href={`/ingredients/${ingredient.slug}`}>
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

      <div class="summary-total">
        <div class="summary-total__amount">Total: 9,95€</div>
        <button class="resume__link" type="button">Realizar pedido</button>
      </div>

    </div>
  </div>
}

export { Summary }
export default Summary
