const fail = (actual, expected) =>  {
  throw new Error(`Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
}

const assertThat = actual => ({
  throwsWithMessage(message) {
    try { actual(); }
    catch (e) {
      e.message === message || fail(e.message, message);
      return;
    }
    throw new Error(`Expected ${actual} to throw, but it didn't`);
  },
  containsExactly(...expected) {
    if (actual.length !== expected.length) fail(actual, expected);
    for (let i = 0; i < actual.length; i++ ){
      if (actual[i] !== expected[i]) fail(actual, expected);
    }
  }
});

module.exports = { assertThat };
