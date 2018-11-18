const location = global.location || { hostname: 'localhost' }

const CLIENT_URL = `http://${location.hostname}:8080`
const SERVER_URL = `http://${location.hostname}:3000`
const INGREDIENTS_URL = `${SERVER_URL}/ingredients`

const ASSETS = [
  'index.html',
  '404.html',

  'sanitize.css',
  'styles.css',

  'fonts/BebasNeue-Regular.otf',
  'fonts/BebasNeue-Regular.ttf',

  'img/back.png',
  'img/close.png',
  'img/gluten.png',
  'img/share.png',

  'img/favicon/android-icon-144x144.png',
  'img/favicon/android-icon-192x192.png',
  'img/favicon/android-icon-36x36.png',
  'img/favicon/android-icon-48x48.png',
  'img/favicon/android-icon-72x72.png',
  'img/favicon/android-icon-96x96.png',
  'img/favicon/apple-icon-114x114.png',
  'img/favicon/apple-icon-120x120.png',
  'img/favicon/apple-icon-144x144.png',
  'img/favicon/apple-icon-152x152.png',
  'img/favicon/apple-icon-180x180.png',
  'img/favicon/apple-icon-57x57.png',
  'img/favicon/apple-icon-60x60.png',
  'img/favicon/apple-icon-72x72.png',
  'img/favicon/apple-icon-76x76.png',
  'img/favicon/apple-icon.png',
  'img/favicon/apple-icon-precomposed.png',
  'img/favicon/favicon-16x16.png',
  'img/favicon/favicon-32x32.png',
  'img/favicon/favicon-96x96.png',
  'img/favicon/favicon.ico',
  'img/favicon/ms-icon-144x144.png',
  'img/favicon/ms-icon-150x150.png',
  'img/favicon/ms-icon-310x310.png',
  'img/favicon/ms-icon-70x70.png'
]

module.exports = {
  ASSETS,
  CLIENT_URL,
  INGREDIENTS_URL,
  SERVER_URL
}
