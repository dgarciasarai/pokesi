const addIngredient = slug => state => {
    const quantity = state.ingredientsSummary[slug] || 0
    const ingredientsSummary = Object.assign({}, state.ingredientsSummary)
    ingredientsSummary[slug] = quantity + 1

    localStorage.setItem("bowl", JSON.stringify(ingredientsSummary))

    return { ingredientsSummary }
};

const removeIngredient = slug => state => {
    const quantity = state.ingredientsSummary[slug] || 0
    const ingredientsSummary = Object.assign({}, state.ingredientsSummary)
    ingredientsSummary[slug] = (quantity - 1 < 0) ? 0 : quantity - 1

    localStorage.setItem("bowl", JSON.stringify(ingredientsSummary))
    
    return { ingredientsSummary }
};

export { addIngredient, removeIngredient }