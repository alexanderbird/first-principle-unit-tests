const { fibonacci } = require('./fibonacci');
const { assertThat } = require('./test/fluentAssertions');
const { test } = require('./test/test');

test('fibonacci(1) returns fibonacci sequence up to and including 1', () => {
  const result = fibonacci(1);

  assertThat(result).containsExactlyElementsOf([1,1]);
});
