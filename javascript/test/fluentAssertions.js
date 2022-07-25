const { arrayEquals } = require('./assertions');

function assertThat(actual) {
  return {
    isEmptyArray() {
      if (actual.length) {
        throw new Error(`Expected an empty array but got ${JSON.stringify(actual)}`);
      }
    },
    containsExactlyElementsOf(expected) {
      arrayEquals(actual, expected);
    },
    throwsExceptionWithMessage(message) {
      try {
        actual();
      } catch(e) {
        if (e.message !== message) {
          throw new Error(`Expected ${actual.toString()} to throw an exception with message "${message}" but instead it threw with "${e.message}"`);
        }
        return;
      }
      throw new Error(`Expected ${actual.toString()} to throw but it did not`);
    }
  }
}

module.exports = { assertThat };
