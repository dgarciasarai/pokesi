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
