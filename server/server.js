import express from 'express';
import base from '../src/base/';
import applyServerRouting from './routing';
import applyStaticsPaths from './statics';
import applyEnvMiddleWare from './middleware';

const port = 8000;
const app = express();

function prepareServer() {

  applyEnvMiddleWare(app)
    .then(() => {
      base.console.info(`Checking static paths...`);
      applyStaticsPaths(app);
    })
    .then(() => {
      base.console.info(`Checking server routing...`);
      applyServerRouting(app);
    })
    .then(() => {
      base.console.info(`Setting up server...`);
      launchServer();
    })
    .catch((e) => {
      base.console.error(`Server Error ${e}...`);
    });
}

function launchServer() {
  app.listen(port, function (err) {
    if (err) {
      base.console.error(`${err}`);
      return;
    }
    base.console.success(`Server up on http://localhost:${port}`);
  });
}

prepareServer();
