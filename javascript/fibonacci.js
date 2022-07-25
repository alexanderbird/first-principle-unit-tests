const { Sequence } = require('./Sequence');

function fibonacci(max) {
  if (max < 0) { throw new Error(`Invalid Parameter: max length must be greater than or equal to zero, but was ${max}`); }
  if (max === 0) return [];
  const result = new Sequence(1, 1);
  while (result.last < max) {
    result.push(result.last + result.secondLast);
  }
  return result.toArray();
}

module.exports = { fibonacci };
