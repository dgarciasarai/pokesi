import api from '../utils/api'

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
  return { ingredients }
};

export {
  loadIngredients,
  loadIngredientsSuccess
};
