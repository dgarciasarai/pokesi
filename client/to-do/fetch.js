/**
 * Intercepts a FetchEvent and responds with cached content
 * @param {FetchEvent} event
 * @param {string} cacheVersion
 */
async function respondWithCachedContent (event, cacheVersion) {
  console.log(event.request)

  const cache = await caches.open(cacheVersion)
  const cachedResponse = await cache.match(event.request)
  const fetchResponsePromise = fetch(event.request)
  const response = cachedResponse || await fetchResponsePromise

  if (cachedResponse) {
    fetchResponsePromise.then(fetchResponse => {
      cache.add(fetchResponse.url, fetchResponse)
    })
  } else {
    console.log(response)
  }

  return response
}

export {
  respondWithCachedContent
}
