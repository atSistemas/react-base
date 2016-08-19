exports.useColors = process.browser ? null : require('supports-color');

exports.colors = {
  success: 32,
  error: 31,
  default: 32,
  warning: 33,
};

exports.symbols = {
  ok: '✓',
  war: '✓',
  err: '✖',
  dot: '․'
};

if (process.platform === 'win32') {
  exports.symbols.ok = '\u221A';
  exports.symbols.war = '\u221A';
  exports.symbols.err = '\u00D7';
  exports.symbols.dot = '.';
}

exports.color = function(type, str) {
  if (!exports.useColors) {
    return String(str);
  }

  if (!exports.colors[type]) {
    type = 'default';
  }

  return `\u001b[${exports.colors[type]}m${str} \u001b[0m`;
};
