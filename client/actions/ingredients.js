import api from '../utils/api'
import { SERVER_URL } from '../utils/constants';

const loadIngredients = () => async (state, actions) => {
  try {
    const response = await api('/ingredients');
    const ingredients = await response.json();
    actions.loadIngredientsSuccess(ingredients);
  } catch (error) {
    console.error(error)
  }

  return { ingredients: null }
};

const loadIngredientsSuccess = ingredients => () => {
  return {
    ingredients: ingredients.map(ingredient => Object.assign({}, ingredient, {
      image: `${SERVER_URL}${ingredient.image}`
    }))
  }
};

export {
  loadIngredients,
  loadIngredientsSuccess
};
