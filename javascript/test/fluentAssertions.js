const { arrayEquals } = require('./assertions');

function assertThat(actual) {
  return {
    containsExactlyElementsOf(expected) {
      arrayEquals(actual, expected);
    }
  }
}

module.exports = { assertThat };
