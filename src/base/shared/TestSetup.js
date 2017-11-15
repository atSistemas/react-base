/* Setting up Enzyme 3.x */

let enzyme = require('enzyme');
let Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });


/* Setting up JSDOM >v10 */

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};

const props = Object.getOwnPropertyNames(window)
  .filter(prop => typeof global[prop] === 'undefined')
  .reduce((result, prop) => ({
    ...result,
    [prop]: Object.getOwnPropertyDescriptor(window, prop),
  }), {});

Object.defineProperties(global, props);

//export default global;
