const { describe, test, assertThat } = require('./testRunner');
const { fibonacci } = require('./fibonacci');

describe(() => {
  test('fibonacci(-1) throws', () => {
    assertThat(() => fibonacci(-1)).throwsWithMessage("Max value must be greater than zero but was -1");
  });

  test('fibonacci(0) throws', () => {
    assertThat(() => fibonacci(0)).throwsWithMessage("Max value must be greater than zero but was 0");
  });

  test('fibonacci(1) returns a pair of ones', () => {
    assertThat(fibonacci(1)).containsExactly(1, 1);
  });

  test('fibonacci(3) returns the sequence up to 3', () => {
    assertThat(fibonacci(3)).containsExactly(1, 1, 2, 3);
  });

  test('fibonacci(30) returns the sequence up to 21', () => {
    assertThat(fibonacci(21)).containsExactly(1, 1, 2, 3, 5, 8, 13, 21);
  });
});
