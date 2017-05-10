import path from 'path';

import base from 'base';
import * as FileSystem from '../../src/base/shared/FileSystem';

export default function getScripts(file) {

  const scriptPath = (base.env === 'development' && file === 'vendor')
  ? path.resolve( __dirname, '../../dist/vendor-hashes.json')
  : path.resolve( __dirname, '../../dist/output-hashes.json');

  try {
    const content = JSON.parse(FileSystem.readFile(scriptPath, 'utf8'));
    const node = content.files[file];
    return (node instanceof Array ) ? `<script src="/${node[0]}"></script>` : `<script src="/dlls/${node}"></script>`;
    } catch (e) {
      console.error(e);
    }
}
