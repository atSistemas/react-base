export default function ReactBaseError(msg) {
  this.msg = '[BASE ERROR] ' + msg;
  this.name = 'React Base Error';
  this.stack = (new Error()).stack;
}

ReactBaseError.prototype = Object.create(Error.prototype);
ReactBaseError.prototype.constructor = ReactBaseError;
