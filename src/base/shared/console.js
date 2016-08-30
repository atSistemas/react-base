exports.useColors = process.browser ? null : require('supports-color');

exports.colors = {
  success: 32,
  error: 31,
  default: 32,
  info: 34
};

exports.symbols = {
  ok: '✓',
  err: '✖',
  info: 'i',
  dot: '․',
  CR: '\u000A'
};

if (process.platform === 'win32') {
  exports.symbols.ok = '\u221A';
  exports.symbols.err = '\u00D7';
  exports.symbols.info = 'i';
  exports.symbols.dot = '.';
  exports.symbols.CR = '\u000D\u000A';
}

exports.color = function (type, str) {
  if (!exports.useColors) {
    return String(str);
  }

  if (!exports.colors[type]) {
    type = 'default';
  }

  return '\u001b[' + exports.colors[type] + 'm' + str + '\u001b[0m';
};

exports.line = function () {
  const args = Array.prototype.slice.call(arguments);
  return console.log.apply(console, [exports.symbols.CR].concat(args).concat(exports.symbols.CR));
};

exports.info = function () {
  const args = Array.prototype.slice.call(arguments);
  return console.log.apply(console, ['[BASE]', exports.color('info', exports.symbols.info)].concat(args));
};

exports.success = function () {
  const args = Array.prototype.slice.call(arguments);
  return console.log.apply(console, ['[BASE]', exports.color('success', exports.symbols.ok)].concat(args));
};

exports.error = function () {
  const args = Array.prototype.slice.call(arguments);
  return console.log.apply(console, ['[BASE]', exports.color('error', exports.symbols.error)].concat(args));
};

exports.clear = function () {
  process.stdout.write("\x1B[2J\x1B[0f");
};
