import { SERVER_URL } from './constants.js'

/**
 * Perform an HTTP request through fetch to the API server
 * @param {string} path
 * @param {object|undefined} options
 * @return {Promise<Response>}
 */
function api (path, options) {
  return fetch(`${SERVER_URL}${path}`, options)
}

export { api }
export default api
