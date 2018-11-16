import { h } from 'hyperapp'
import { Link, goBack } from './link'
import backArrow from '../img/back.png'
import gluten from '../img/gluten.png'

function IngredientDetail (state, actions) {
  if (state.ingredients && !state.ingredients.length) {
    actions.loadIngredients()
    return ''
  }

  const ingredientSlug = state.route.pathname.split("/").pop()

  const ingredient = state.ingredients.find(
    ingredient => ingredient.slug === ingredientSlug
  );

  return <div>
    <div class="header-detail">
      <Link actions={actions} href={goBack}>
        <img alt="Volver" src={backArrow} class="header-detail-back-arrow"/>
      </Link>
      <span>{ingredient.name}</span>
    </div>
    <figure class="ingredient__detail__image">
      <img src={ingredient.image}/>
    </figure>
    <div class="ingredient-detail">
      <div class="ingredient-cell">
        <span class="ingredient__name">{ingredient.name}</span>
        <span class="ingredient__weight">{ingredient.weight}g</span>
      </div>
      <div class="ingredient-quantity">
        <span class="quantity__minus">-</span>
        <span class="quantity__total">0</span>
        <span class="quantity__more">+</span>
      </div>
    </div>
    <div class="ingredient-detail-table">
      <p>
        <span>Valor energético</span>
        <span class="ingredient__values">{ingredient.calories.kj}kj / {ingredient.calories.kcal}kcal</span>
      </p>
      <p>
        <span>Grasas</span>
        <span class="ingredient__values">{ingredient.composition.fats}g</span>
      </p>
      <p>
        <span>Hidratos de carbono</span>
        <span class="ingredient__values">{ingredient.composition.carbs}g</span>
      </p>
      <p>
        <span>Proteínas</span>
        <span class="ingredient__values">{ingredient.composition.proteins}g</span>
      </p>
    </div>
    <div class="ingredient__detail__allergens">
      {ingredient.hasGluten && <p><img src={gluten} />Este ingrediente contiene gluten.</p>}
    </div>
  </div>
}

export { IngredientDetail }
export default IngredientDetail
