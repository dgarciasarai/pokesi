import { isClientURL } from '../utils/is-app-url'

/**
 * Intercepts a FetchEvent and responds with cached content
 * @param {FetchEvent} event
 * @param {string} cacheVersion
 */
async function respondWithCachedContent (event, cacheVersion) {
}

export {
  respondWithCachedContent
}
