/**
 * Intercepts a FetchEvent and responds with cached content
 * @param {FetchEvent} event
 * @param {string} cacheVersion
 */
async function respondWithCachedContent (event, cacheVersion) {
  const cache = await caches.open(cacheVersion)
  const cachedResponse = await cache.match(event.request)
  const responsePromise = fetch(event.request)

  responsePromise.then(response => {
    cache.add(response.url, response)
  })

  return cachedResponse || responsePromise
}

export {
  respondWithCachedContent
}
