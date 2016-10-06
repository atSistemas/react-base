import fs from 'fs';
import path from 'path';
import console from '../../../src/base/shared/console';

export default class fileHashPlugin {

  constructor(options) {
    this.options = options;
  }

  write(data) {
    try {
      fs.writeFileSync(path.resolve(this.options.path, this.options.fileName), data, 'utf8');
      console.success(`${this.options.fileName} hash file generated correctly!`);
    } catch (e) {
      console.error(e);
    }
  }

  apply(compiler) {
    compiler.plugin('done', (stats) => {
      const assets = stats.toJson();
      this.write(JSON.stringify({
        hash : assets.hash,
        files : assets.assetsByChunkName,
      }));
    });
  }
}
