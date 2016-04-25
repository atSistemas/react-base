import path from 'path'
import express from 'express'
import webpack from 'webpack'
import distProxy from './dist-proxy'

const app = express();
const port = process.env.PORT || 8000
const publicPath = path.resolve(__dirname, '../', 'public')

app.use(express.static(publicPath));

distProxy(app)

app.listen(port, function () {
  console.log('[BASE] Server up on port ' + port);
});
