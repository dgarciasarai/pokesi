const initialState = {
  ingredients: [],
  ingredientsSummary: JSON.parse(localStorage.getItem("bowl")) || {},
  route: { pathname: window.location.pathname }
};

export { initialState }
export default initialState
