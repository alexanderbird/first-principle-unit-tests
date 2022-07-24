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

  testFibonacciUpToTwoWorks() {
    const result = fibonacci(2);

    expectThat(result).isArrayEqualTo([1, 1, 2]);
  }

  testFibonacciUpToThreeWorks() {
    const result = fibonacci(3);

    expectThat(result).isArrayEqualTo([1, 1, 2, 3]);
  }

  testFibonacciUpToFourIsTheSameAsUpToThree() {
    const result = fibonacci(4);

    expectThat(result).isArrayEqualTo(fibonacci(3));
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
