import express from 'express';

import base from 'base';
import httpServer from './httpServer';
import applyStaticsPaths from './statics';
import applyServerRouting from './routing';
import applyEnvMiddleWare from './middleware';

const app = express();

const launchServer = () => {
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
      httpServer(app);
    })
    .catch((e) => {
      base.console.error(`Server Error ${e}...`);
    });
};

launchServer();