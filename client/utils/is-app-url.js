import { CLIENT_URL, SERVER_URL } from './constants'

const isClientURL = (url) => {
  let isClient = url.startsWith(CLIENT_URL)

  if (isClient) {
    const pathname = url.replace(CLIENT_URL, '')

    isClient = (
      (pathname === '/') ||
      (pathname === '/index.html') ||
      (pathname === '/summary') ||
      (/^\/ingredients\/([a-z\-]+)$/i.test(pathname))
      )
    }

    return isClient
  }

const isServerURL = (url) => {
  let isServer = url.startsWith(SERVER_URL)

  if (isServer) {
    const pathname = url.replace(SERVER_URL, '')

    isServer = (
      (pathname === '/ingredients') ||
      (/^\/([a-z\-]+)\.jpg$/i.test(pathname))
    )
  }

  return isServer
}

const isAppURL = (url) => (
  isClientURL(url) ||
  isServerURL(url)
)

export {
  isClientURL,
  isServerURL,
  isAppURL
}

export default isAppURL
