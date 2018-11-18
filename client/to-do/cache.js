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
}

/**
 * Removes all existing caches except the given cacheVersion
 * @param {string} cacheVersion
 */
function clearOldCaches(cacheVersion) {
}

export {
  addClientToCache,
  addIngredientsToCache,
  clearOldCaches
}
