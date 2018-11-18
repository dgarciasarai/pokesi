import {
  ASSETS,
  INGREDIENTS_URL,
  SERVER_URL,
  CLIENT_URL
} from "../utils/constants";

/**
 * Adds client base code to cache
 * @param {Cache} cache
 */
function addClientToCache(cache) {
  return Promise.all(
    ASSETS.map(asset => {
      const assetURL = `${CLIENT_URL}/${asset}`
      console.log(`Caching ${assetURL}`)
      return cache.add(assetURL)
    })
  )
}

/**
 * Add all ingredients to cache
 * @param {Cache} cache
 */
async function addIngredientsToCache(cache) {
  try {
    const ingredientsResponse = await fetch(INGREDIENTS_URL)

    console.log(`Caching ${INGREDIENTS_URL}`)
    await cache.put(INGREDIENTS_URL, ingredientsResponse.clone())

    await Promise.all(
      (await ingredientsResponse.json()).map(ingredient => {
        const imageURL = `${SERVER_URL}${ingredient.image}`
        console.log(`Caching ${imageURL}`)
        return cache.add(imageURL)
      })
    )
  } catch(error) {
    console.log(error.stack)
  }
}

/**
 * Removes all existing caches except the given cacheVersion
 * @param {string} cacheVersion
 */
function clearOldCaches(cacheVersion) {
  return caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames
        .filter(cacheName => cacheName !== cacheVersion)
        .map(cacheName => {
          console.log(`Removing cache ${cacheName}`)
          caches.delete(cacheName)
        })
    )
  })
}

export {
  addClientToCache,
  addIngredientsToCache,
  clearOldCaches
}
