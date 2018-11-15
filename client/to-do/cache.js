const INGREDIENTS_URL = 'http://localhost:3000/ingredients'

/**
 * Adds client base code to cache
 * @param {Cache} cache
 */
async function addClientToCache(cache) {
  await cache.add('/')
}

/**
 * Add all ingredients to cache
 * @param {Cache} cache
 */
async function addIngredientsToCache(cache) {
  const ingredientsResponse = await fetch(INGREDIENTS_URL)
  const ingredients = await ingredientsResponse.json()

  await cache.add(INGREDIENTS_URL, ingredientsResponse)

  await Promise.all(
    ingredients.map(
      ingredient => cache.add(ingredient.image)
    )
  )
}

export {
  addClientToCache,
  addIngredientsToCache
}
