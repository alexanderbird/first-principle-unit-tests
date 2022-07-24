const { fibonacci } = require('./subject');

class Tests {

  testFibonacciUpToZeroIsEmpty() {
    const result = fibonacci(0);

    expectThat(result).isArrayEqualTo([]);
  }

  testFibonacciUpToOneIsAPairOfOnes() {
    const result = fibonacci(1);

    expectThat(result).isArrayEqualTo([1, 1]);
  }
}


const allTests = new Tests();
Object.getOwnPropertyNames(Tests.prototype)
  .filter(name => name.match(/^test/))
  .forEach(test => {
    try {
      allTests[test]();
    } catch(e) {
      console.log(test + '... FAIL');
      throw e;
    }
    console.log(test + '... PASS');
  });

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
