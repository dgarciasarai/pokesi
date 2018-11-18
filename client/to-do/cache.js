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
async function addClientToCache(cache) {
  await Promise.all(
    ASSETS.map(async (asset) => {
      const assetURL = `${CLIENT_URL}/${asset}`

      try {
        await cache.add(assetURL)
      } catch (error) {
        console.error(`Failed to add ${assetURL}`)
        throw error
      }
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

    await cache.put(INGREDIENTS_URL, ingredientsResponse.clone())

    await Promise.all(
      (await ingredientsResponse.json()).map(async (ingredient) => {
        const imageURL = `${SERVER_URL}${ingredient.image}`

        try {
          cache.add(imageURL)
        } catch (error) {
          console.error(`Failed to add ${imageURL}`)
          throw error
        }
      })
    )
  } catch(error) {
    console.log('Failed to add /ingredients')
    throw error
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
