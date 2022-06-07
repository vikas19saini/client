const nextTranslate = require('next-translate')

module.exports = {
  env: {
    API_URL: 'http://localhost:3010/',
    WEB_URL: 'http://localhost:3005/'
  },
  images: {
    domains: ['localhost'],
  },
  compress: true,
  ...nextTranslate()
}