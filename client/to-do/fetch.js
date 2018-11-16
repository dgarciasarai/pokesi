/**
 * Intercepts a FetchEvent and responds with cached content
 * @param {FetchEvent} event
 * @param {string} cacheVersion
 */
async function respondWithCachedContent (event, cacheVersion) {
  const cache = await caches.open(cacheVersion)
  let response = await cache.match(event.request.url)

  if (!response) {
    try {
      response = await fetch(event.request.url)
    } catch (error) {
      response = null
    }

    if (!response || response.status >= 400) {
      if (
        /\/ingredients\/[a-z\-]+$/i.test(event.request.url) ||
        /\/summary$/i.test(event.request.url)
      ) {
        response = await cache.match('/index.html') || await fetch('/index.html')
      } else {
        response = await cache.match('/404.html') || await fetch('/404.html')
      }
    }

    cache.put(event.request.url, response.clone())
  }

  return response
}

export {
  respondWithCachedContent
}
