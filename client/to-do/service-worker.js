/**
 * Register the service worker placed in /sw.js route
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful: ', registration)
      })
      .catch(error => {
        console.error('ServiceWorker registration failed: ', error)
      })
  }
}

/**
 * Listen to various serviceWorker events
 * @param {Window} windowClient
 */
function listenToServiceWorkerEvents(windowClient) {
  windowClient.addEventListener('install', _handleServiceWorkerInstalled)
  windowClient.addEventListener('activate', _handleServiceWorkerActivated)
  windowClient.addEventListener('fetch', _handleServiceWorkerFetch)
}

/**
 * Executed when the service worker has been installed
 * @param {InstallEvent} event
 */
function _handleServiceWorkerInstalled(event) {
  console.log(event)
}

/**
 * Executed when the service worker has been activated
 * @param {ExtendableEvent} event
 */
function _handleServiceWorkerActivated(event) {
  console.log(event)
}

/**
 * Executed when the service worker has been activated
 * @param {FetchEvent} event
 */
function _handleServiceWorkerFetch(event) {
  console.log(event)
}

export {
  registerServiceWorker,
  listenToServiceWorkerEvents
}
