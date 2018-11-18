import { isClientURL } from '../utils/is-app-url'

/**
 * Intercepts a FetchEvent and responds with cached content
 * @param {FetchEvent} event
 * @param {string} cacheVersion
 */
async function respondWithCachedContent (event, cacheVersion) {
  const url = event.request.url

  const cache = await caches.open(cacheVersion)
  let response = await cache.match(url)

  if (!response) {
    try {
      response = await fetch(url)
    } catch (error) {
      console.error(error)
      console.error(url)

      if (isClientURL(url)) {
        console.log(`Using index.html for ${url}`)
        response = cache.match('/index.html')
      } else {
        console.log(`Using 404.html for ${url}`)
        response = cache.match('/404.html')
      }
    }
  }

  return response
}

export {
  respondWithCachedContent
}
