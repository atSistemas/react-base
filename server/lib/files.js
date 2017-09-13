import path from 'path';

import { env } from '../../src/base/';
import * as FileSystem from '../../src/base/shared/FileSystem';

let files;

if (env === 'development') {
  files = {
    app: { js: '/app.js' },
    vendor: { js: '/dlls/vendor.dll.js' },
  };
} else {
  const assetsManifest = path.resolve(__dirname, '../../dist/webpack-assets.json');
  files = JSON.parse(FileSystem.readFile(assetsManifest, 'utf8'));
}

export function getScripts(file) {
  const scriptPath = `${files[file].js}`;
  return (env === 'production') ? `<script defer src="/assets${scriptPath}"></script>` : `<script src="${scriptPath}"></script>`; 
}

export function getStyles(file) {
  const cssPath = files[file].css;
  return (env === 'production') ? `<link rel="stylesheet" href="/assets${cssPath}" media='all'">` : '';
}
