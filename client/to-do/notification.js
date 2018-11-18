let serviceWorkerRegistration = null

function setServiceWorkerRegistration (_serviceWorkerRegistration) {
  serviceWorkerRegistration = _serviceWorkerRegistration
}

/**
 * Sends a native notification
 * @param {string} title
 * @param {string} body
 */
function sendNotification(title, body) {
  if ('Notification' in global) {
    if (Notification.permission === 'granted') {
      const options = {
        body,
        tag: 'poke-ready',
        lang: 'es',
        badge: '/img/favicon/16x16.png',
        icon: '/img/favicon/192x192.png',
        vibrate: [200],
        renotify: true,
        requireInteraction: true
      }

      if (serviceWorkerRegistration) {
        options.actions = [
          { action: 'mesa', title: 'Traer a la mesa' }
        ]

        serviceWorkerRegistration.showNotification(title, options)
      } else {
        new Notification(title, options)
      }
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(permission => {
        if (permission === 'granted') {
          sendNotification(title, body)
        }
      })
    }
  }
}

export {
  sendNotification,
  setServiceWorkerRegistration
}
