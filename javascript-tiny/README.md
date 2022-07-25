## tiny examples

`node fibonacci.test.js`

```
fibonacci(-1) throws
fibonacci(0) throws
fibonacci(1) returns a pair of ones
fibonacci(3) returns the sequence up to 3
fibonacci(30) returns the sequence up to 21
```

With an off by one error:

`node fibonacci.test.js`

```
fibonacci(-1) throws
fibonacci(0) throws
fibonacci(1) returns a pair of ones
/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-tiny/testRunner.js:5
  throw new Error(`Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
  ^

Error: Expected [1,1] but got [1,1,2]
    at fail (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-tiny/testRunner.js:5:9)
    at Object.containsExactly (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-tiny/testRunner.js:18:44)
    at /Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-tiny/fibonacci.test.js:14:30
    at /Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-tiny/testRunner.js:3:68
    at /Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-tiny/testRunner.js:2:69
    at Array.forEach (<anonymous>)
    at describe (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-tiny/testRunner.js:2:56)
    at Object.<anonymous> (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-tiny/fibonacci.test.js:4:1)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
```
