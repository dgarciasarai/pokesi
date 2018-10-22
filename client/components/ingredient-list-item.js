import { h } from 'hyperapp'
import { Link } from './link'
import gluten from '../img/gluten.png'

/**
 * @param {object} props
 * @param {object} props.actions
 * @param {string} props.name
 * @param {string} props.image
 * @param {string} props.weight
 * @param {string} props.slug
 * @param {boolean} props.hasGluten
 * @param {number} [props.quantity=0]
 */
function IngredientListItem (props) {
  const handleAddClick = () => props.actions.addIngredient(props.slug)
  const handleRemoveClick = () => props.actions.removeIngredient(props.slug)

  let className = 'ingredient-item'
  let glutenTag = ''

  if (props.hasGluten) {
    glutenTag = <img
      alt={`El ingrediente ${props.name} contiene gluten`}
      class="ingredient__gluten"
      src={gluten}
    />
  }

  if (props.quantity) {
    className += ' ingredient-item-bowl'
  }

  return <li class={className}>
    <Link
      actions={props.actions}
      class="ingredient__link"
      href={`/ingredients/${props.slug}`}
    >
      <div class="ingredient__allergens">{glutenTag}</div>
      <img alt={props.name} class="ingredient__image" src={props.image} />

      <div class="ingredient-cell">
        <span class="ingredient__name">{props.name}</span>
        <span class="ingredient__weight">{props.weight}g</span>
      </div>
    </Link>

    <div class="ingredient-quantity">
      <button class="quantity__minus" type="button" onclick={handleRemoveClick}>-</button>
      <span class="quantity__total">{props.quantity}</span>
      <button class="quantity__more" type="button" onclick={handleAddClick}>+</button>
    </div>
  </li>
}

export { IngredientListItem }
export default IngredientListItem
