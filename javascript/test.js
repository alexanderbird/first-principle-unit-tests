const { fibonacci } = require('./subject');

function main() {
  fibonacciUpToZeroIsEmpty();
  fibonacciUpToOneIsAPairOfOnes();
}

function fibonacciUpToZeroIsEmpty() {
  const result = fibonacci(0);

  expectThat(result).isArrayEqualTo([]);
}

function fibonacciUpToOneIsAPairOfOnes() {
  const result = fibonacci(1);

  expectThat(result).isArrayEqualTo([1, 1]);
}

main();

console.log('PASS');

/*****/

function expectThat(actual) {
  return {
    isArrayEqualTo(expected) {
      if (actual.length !== expected.length) { throw new Error(`Expected array of length ${expected.length}, got ${actual.length}.`); }
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          throw new Error(`Expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}.`);
        }
      }
    }
  }
}
