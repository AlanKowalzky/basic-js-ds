const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 */
class Stack {
  constructor() {
    this._data = [];
  }

  push(value) {
    this._data.push(value);
  }

  pop() {
    return this._data.pop();
  }

  peek() {
    return this._data[this._data.length - 1];
  }
}

module.exports = {
  Stack,
};
