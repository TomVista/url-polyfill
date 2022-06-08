const { resolve } = require('path');

module.exports = {
    mode: 'production',
    entry: resolve('./node_modules/core-js/actual/url/index.js'),
    output: {
        globalObject: 'this',
        path: resolve('./'),
        filename: 'index.js',
        libraryTarget: "umd",
        library: "URL"
    }
};