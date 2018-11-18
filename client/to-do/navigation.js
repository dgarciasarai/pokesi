/**
 * Add this pathname to browser history without
 * doing a real navigation.
 * @param {string} pathname
 */
function saveNewHistoryState(pathname) {
  window.history.pushState(null, null, pathname)
}

/**
 * Execute callback anytime a navigation is
 * performed (for example pressing back button).
 * @param {function} callback
 */
function listenToHistoryEvents(callback) {
}

export {
  saveNewHistoryState,
  listenToHistoryEvents
}
