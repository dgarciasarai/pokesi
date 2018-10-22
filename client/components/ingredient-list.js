import { h } from 'hyperapp'
import Link from './link'
import Header from './header'
import IngredientDetail from './ingredient-detail'
import IngredientListItem from './ingredient-list-item'

function IngredientList (state, actions) {
  let listClassName = 'ingredients'

  if (state.ingredients && !state.ingredients.length) {
    actions.loadIngredients()
  }

  let ingredientDetail = ''

  if (/\/ingredients\/([a-z0-9-]+)/i.test(state.route.pathname)) {
    ingredientDetail = <IngredientDetail actions={actions} state={state} />
    listClassName += ' list-with-detail'
  }

  return (
    <div>
      <Header actions={actions} />

      <div class={listClassName}>
        <p class="ingredients__intro">Selecciona tus ingredientes:</p>
        <ul class="ingredients-list">{
          state.ingredients.map(ingredient => <IngredientListItem
            actions={actions}
            name={ingredient.name}
            image={ingredient.image}
            weight={ingredient.weight}
            slug={ingredient.slug}
            hasGluten={ingredient.hasGluten}
            quantity={state.ingredientsSummary[ingredient.slug] || 0}
          />)
        }</ul>
      </div>
      <div class="ingridients-resume">
        <Link actions={actions} class="resume__link" href={`/summary`}>Resumen</Link>
      </div>

      {ingredientDetail}
    </div>
  )
}

export { IngredientList }
export default IngredientList
