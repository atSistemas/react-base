import express from 'express';

import base from '../src/base/';
import applyServerRouting from './routing';
import applyStaticsPaths from './statics';
import applyEnvMiddleWare from './middleware';

const port = 8000;
const app = express();

function listen(app) {
  app.listen(port, function (err) {
    if (err) {
      base.console.error(`${err}`);
      return;
    }
    base.console.success(`Server up on http://localhost:${port}`);
  });
}

function launchServer(app) {
  base.console.info(`Checking Env middlewares...`);
  applyEnvMiddleWare(app, listen);
  base.console.info(`Checking static paths...`);
  applyStaticsPaths(app);
  base.console.info(`Checking routes...`);
  applyServerRouting(app, listen);
}

launchServer(app);
