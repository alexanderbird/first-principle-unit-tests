const { Sequence } = require('./Sequence');

function fibonacci(max) {
  if (max === 0) return [];
  const result = new Sequence(1, 1);
  while (result.last < max) {
    result.push(result.last + result.secondLast);
  }
  return result.toArray();
}

module.exports = { fibonacci };
