# JavaScript example: Unit Tests without a Test Runner

See the example test in [`./fibonacci.test.js`](./fibonacci.test.js)

`./test.sh`

```
 ✔ fibonacci(1) returns fibonacci sequence up to and including 1
 ✔ fibonacci(0) returns an empty list
 ✔ fibonacci(21) returns fibonacci sequence up to and including 21
 ✔ fibonacci(-1) throws a not implemented exception
```

Or if I introduce an off by one error:

```
diff --git a/javascript/fibonacci.js b/javascript/fibonacci.js
index c8914dd..ec5b3ab 100644
--- a/javascript/fibonacci.js
+++ b/javascript/fibonacci.js
@@ -4,7 +4,7 @@ function fibonacci(max) {
   if (max < 0) { throw new Error(`Invalid Parameter: max length must be greater than or equal to zero, but was ${max}`); }
   if (max === 0) return [];
   const result = new Sequence(1, 1);
-  while (result.last < max) {
+  while (result.last <= max) {
     result.push(result.last + result.secondLast);
   }
   return result.toArray();
```

Then the test shows:

```
 ✘ fibonacci(1) returns fibonacci sequence up to and including 1

Error: Expected [1,1], got [1,1,2]
    at arrayEquals (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript/test/assertions.js:3:11)
    at Object.containsExactlyElementsOf (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript/test/fluentAssertions.js:11:7)
    at /Users/alexanderbird/code/personal/first-principle-unit-tests/javascript/fibonacci.test.js:8:6
    at /Users/alexanderbird/code/personal/first-principle-unit-tests/javascript/runTests.js:7:5
    at Array.forEach (<anonymous>)
    at Object.<anonymous> (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript/runTests.js:5:22)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
 ✔ fibonacci(0) returns an empty list
 ✘ fibonacci(21) returns fibonacci sequence up to and including 21

Error: Expected [1,1,2,3,5,8,13,21], got [1,1,2,3,5,8,13,21,34]
    at arrayEquals (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript/test/assertions.js:3:11)
    at Object.containsExactlyElementsOf (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript/test/fluentAssertions.js:11:7)
    at /Users/alexanderbird/code/personal/first-principle-unit-tests/javascript/fibonacci.test.js:20:6
    at /Users/alexanderbird/code/personal/first-principle-unit-tests/javascript/runTests.js:7:5
    at Array.forEach (<anonymous>)
    at Object.<anonymous> (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript/runTests.js:5:22)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
 ✔ fibonacci(-1) throws a not implemented exception
```
