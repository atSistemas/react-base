import path from 'path';

import ENV from '../../src/base/shared/Env';
import * as FileSystem from '../../src/base/shared/FileSystem';

export default function getScripts(file) {

  const scriptPath = (ENV === 'development' && file === 'vendor')
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
