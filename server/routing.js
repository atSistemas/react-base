import base from '../src/base/';
import routingMiddleware from './middleware/routing-middleware';

export default function applyServerRouting(app) {
  app.use(routingMiddleware);
  base.console.success(`Routing up`);
}
