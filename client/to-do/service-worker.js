/**
 * Register the service worker placed in /sw.js route
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registered')
      })
      .catch(error => {
        console.error('ServiceWorker failed to register', error)
      })
  }
}

/**
 * Executed when the service worker has been installed
 * @param {InstallEvent} event
 * @param {string} cacheVersion
 */
function handleServiceWorkerInstalled(event, cacheVersion) {
  console.log(`ServiceWorker ${cacheVersion} installed`)
}

/**
 * Executed when the service worker has been activated
 * @param {ExtendableEvent} event
 * @param {string} cacheVersion
 */
function handleServiceWorkerActivated(event, cacheVersion) {
  console.log(`ServiceWorker ${cacheVersion} activated`)
}

/**
 * Executed when the service worker has been activated
 * @param {MessageEvent} event
 * @param {string} cacheVersion
 */
function handleServiceWorkerMessage(event, cacheVersion) {
  console.log(event)
}

/**
 * Executed when the service worker has been activated
 * @param {FetchEvent} event
 * @param {string} cacheVersion
 */
function handleServiceWorkerFetch(event, cacheVersion) {
  // console.log(event)
}

export {
  registerServiceWorker,
  handleServiceWorkerInstalled,
  handleServiceWorkerActivated,
  handleServiceWorkerMessage,
  handleServiceWorkerFetch
}
