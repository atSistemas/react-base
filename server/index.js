require('babel-core/register')
if(!!~process.argv.indexOf('--component')){
  console.log('[BASE] Starting Component Server...')
  var server = require("./server-component.js")
}
else {
  console.log('[BASE] Starting Server...')
  var server = require("./server.js")
}
