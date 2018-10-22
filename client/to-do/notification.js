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
}

export {
  sendNotification,
  setServiceWorkerRegistration
}
