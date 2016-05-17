require('babel-core/register')
var ENV = require('../src/shared/env')
console.log('[BASE] Starting '+ ENV.default +' enviroment...')
var server = require("./server.js")
