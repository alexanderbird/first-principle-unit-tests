const { fibonacci } = require('./fibonacci');
const { assertThat } = require('./test/fluentAssertions');
const { test } = require('./test/test');

test('fibonacci(1) returns fibonacci sequence up to and including 1', () => {
  const result = fibonacci(1);
  assertThat(result)
    .containsExactlyElementsOf([1,1]);
});

test('fibonacci(0) returns an empty list', () => {
  const result = fibonacci(0);
  assertThat(result)
    .isEmptyArray();
});

test('fibonacci(21) returns fibonacci sequence up to and including 21', () => {
  const result = fibonacci(21);
  assertThat(result)
    .containsExactlyElementsOf([1,1,2,3,5,8,13,21]);
});

test('fibonacci(-1) throws a not implemented exception', () => {
  assertThat(() => fibonacci(-1))
    .throwsExceptionWithMessage("Invalid Parameter: max length must be greater than or equal to zero, but was -1");
});
