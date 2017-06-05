import * as path from 'path';

import { env } from '../../src/base/';
import * as FileSystem from '../../src/base/shared/FileSystem';

let JsFiles;

if ( env === 'development') {
  JsFiles = {
    app: { js: '/app.js' },
    vendor: { js: '/dlls/vendor.dll.js' },
  };
} else {
  const assetsManifest = path.resolve( __dirname, '../../dist/webpack-assets.json');
  JsFiles = JSON.parse(FileSystem.readFile(assetsManifest, 'utf8'));
}

export default function getScripts(file) {
  const scriptPath = JsFiles[file].js;
  return `<script src="${scriptPath}"></script>`;
}
