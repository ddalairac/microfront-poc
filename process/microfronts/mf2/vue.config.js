// vue.config.js

// const fs = require('fs')
// https://nodejs.dev/learn/the-nodejs-fs-module

module.exports = {
  runtimeCompiler: true, // https://cli.vuejs.org/config/#runtimecompiler
//   transpileDependencies: [ // https://cli.vuejs.org/config/#transpiledependencies
//     'vue-fragment',
//     '@fortawesome/fontawesome-svg-core',
//     '@fortawesome/pro-regular-svg-icons',
//     '@fortawesome/vue-fontawesome'
//   ],
  productionSourceMap: false,
  css: {
    extract: false
  },
  devServer: {
    disableHostCheck: true, // When set to true this option bypasses host checking. THIS IS NOT RECOMMENDED as apps that do not check the host are vulnerable to DNS rebinding attacks.
    https: true,
    host: 'localhost',
    // key: fs.readFileSync('/Users/bradcoughlin/server.key'),
    // cert: fs.readFileSync('/Users/bradcoughlin/server.crt'),
    // ca: fs.readFileSync('/Users/bradcoughlin/rootCA.pem')
  },
  publicPath: './'
}
