const { fibonacci } = require('./fibonacci');
const { arrayEquals } = require('./test/assertions');
const { test } = require('./test/test');

test('fibonacci(1) returns fibonacci sequence up to and including 1', () => {
  const result = fibonacci(1);

  arrayEquals(result, [1,1]);
});
