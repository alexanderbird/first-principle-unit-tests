const { fibonacci } = require('./fibonacci');

function testUpToOneIncludesTwoOnes() {
  const result = fibonacci(1);

  arrayEquals(result, [1,1]);
}

function arrayEquals(actual, expected) {
  if (actual.length !== expected.length) {
    throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    }
  }
}

testUpToOneIncludesTwoOnes();
