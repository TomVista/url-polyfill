## URL

code from [core-js/actual/url/index.js](https://github.com/zloirock/core-js)

a standard url class can run in all js env

```
import URL from 'url-polyfill'

const google = new URL('https://www.google.com')

// or

const URL = require('url-polyfill')
const google = new URL('https://www.google.com')

```

用于微信小程序 URL , 41kb