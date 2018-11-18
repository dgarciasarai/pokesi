import 'babel-polyfill'
import { addClientToCache, addIngredientsToCache, clearOldCaches } from './cache'
import { respondWithCachedContent } from './fetch'
import { setServiceWorkerRegistration } from './notification'

/**
 * Register the service worker placed in /sw.js route
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        setServiceWorkerRegistration(registration)
      })
      .catch(error => {
        console.error('ServiceWorker failed to register', error)
      })
  } else {
    console.log('No serviceWorker available')
  }
}

/**
 * Executed when the service worker has been installed
 * @param {InstallEvent} event
 * @param {string} cacheVersion
 */
function handleServiceWorkerInstalled(event, cacheVersion) {
}

/**
 * Executed when the service worker has been activated
 * @param {ExtendableEvent} event
 * @param {string} cacheVersion
 */
function handleServiceWorkerActivated(event, cacheVersion) {
}

/**
 * Executed when the service worker has been activated
 * @param {MessageEvent} event
 * @param {string} cacheVersion
 */
function handleServiceWorkerMessage(event, cacheVersion) {
}

/**
 * Executed when the service worker has been activated
 * @param {FetchEvent} event
 * @param {string} cacheVersion
 */
function handleServiceWorkerFetch(event, cacheVersion) {
}

export {
  registerServiceWorker,
  handleServiceWorkerInstalled,
  handleServiceWorkerActivated,
  handleServiceWorkerMessage,
  handleServiceWorkerFetch
}
