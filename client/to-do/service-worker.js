/**
 * Register the service worker placed in /sw.js route
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope)
      })
      .catch(error => {
        console.error('ServiceWorker registration failed: ', error)
      })
  }
}

export {
  registerServiceWorker
}
