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

  await cache.put(
    INGREDIENTS_URL,
    ingredientsResponse.clone()
  )

  await Promise.all(
    (await ingredientsResponse.json()).map(
      ingredient => cache.add(ingredient.image)
    )
  )
}

export {
  addClientToCache,
  addIngredientsToCache
}
