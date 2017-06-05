import path from 'path';
import express from 'express';

import base from 'base';

const commonStatics = [
  {route: '/mocks', dir: path.join(__dirname, '../../server/api/mocks')}
];

const devStatics = [
  {route: '/dlls', dir: path.join(__dirname, '../../dist/')},
  {route: '/', dir: path.join(__dirname, '../../src/app')},
];

const prodStatics = [
  {route: '/', dir: path.join(__dirname, '../../dist')},
  {route: '/assets', dir: path.join(__dirname, '../../dist/assets')},
];

const envStatics = (base.env === 'development') ? commonStatics.concat(devStatics) : commonStatics.concat(prodStatics);
const statics = envStatics;

export default function applyStaticsPaths(app) {
  statics.map(function(staticPath) {
    app.use(staticPath.route, express.static(staticPath.dir));
    base.console.success(`Applied static path ${staticPath.route}`);
  });
}
