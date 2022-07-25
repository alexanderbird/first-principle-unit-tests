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
    }
  }
}

module.exports = { assertThat };
