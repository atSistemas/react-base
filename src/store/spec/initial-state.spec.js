/*import expect from 'expect'
import { initialState } from '../initial-state'
import jsdom from 'jsdom'
function setupDocument(){
  consolelog("entra")
  // setup the simplest document possible
  var doc = jsdom.jsdom('<!doctype html><html><body></body></html>')

  // get the window object out of the document
  var win = doc.defaultView
  global.document = doc
  global.window = win

  // take all properties of the window object and also attach it to the 
  // mocha global object
  for (let key in win) {
      if (!win.hasOwnProperty(key)) continue
      if (key in global) continue

      global[key] = win[key]
    }
}

describe('store / initialState', () => {

  describe('initialState', () => {

    it('should return initialState', () => {
      setupDocument()
      
      console.log(global.win)
     // let output = initialState

      console.log(output)

    })
  })


})*/
