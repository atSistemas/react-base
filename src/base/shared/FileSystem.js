import fs from 'fs';
import ReactBaseError from './Errors';

function fileExists(filename) {
  try {
    fs.accessSync(filename);
    return true;
  } catch (e) {
    return false;
  }
}

function readDir(path) {
  return fs.readdirSync(path);
}

function readFile(path, options) {
  return fs.readFileSync(path, options);
}

function writeFile(file, content) {
  try {
    fs.writeFileSync(file, content, 'utf8');
    return true;
  } catch (e) {
    throw new ReactBaseError(e);
  }
}

export { fileExists, readDir, readFile, writeFile };
