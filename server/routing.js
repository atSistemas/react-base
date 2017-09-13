import base from '../src/base/';
import routingMiddleware from './middleware/routing-middleware';

const applyServerRouting = (app) => {
 
  app.use(routingMiddleware);
  base.console.success(`Routing up`);
};

export default applyServerRouting;

