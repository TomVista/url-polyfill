const URL = require('./index')

const google = new URL('https://www.google.com')

console.log(google.host === 'www.google.com')