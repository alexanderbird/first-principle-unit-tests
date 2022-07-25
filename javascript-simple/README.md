## Simple JavaScript Examples

`./node test.js`

```
testFibonacciUpToZeroIsEmpty... PASS
testFibonacciUpToOneIsAPairOfOnes... PASS
testFibonacciUpToTwoWorks... PASS
testFibonacciUpToThreeWorks... PASS
testFibonacciUpToFourIsTheSameAsUpToThree... PASS
testFibonacciForNegativeNumbersThrowsInvalidParameterException... PASS
testFibonacciForThirtyWorks... PASS
```

If I introduce an off by one error:

```
diff --git a/javascript-simple/subject.js b/javascript-simple/subject.js
index bcc67f7..701fd02 100644
--- a/javascript-simple/subject.js
+++ b/javascript-simple/subject.js
@@ -6,7 +6,7 @@ function fibonacci(max) {
     const last = result[result.length - 1];
     const secondLast = result[result.length - 2];
     const next = last + secondLast;
-    if (next <= max) {
+    if (next < max) {
       result.push(next);
     } else {
       break;
```

`./node test.js`

```
testFibonacciUpToZeroIsEmpty... PASS
testFibonacciUpToOneIsAPairOfOnes... PASS
testFibonacciUpToTwoWorks... FAIL
/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-simple/test.js:56
      throw e;
      ^

Error: Expected array of length 3, got 2.
Expected: [1,1,2]
Actual: [1,1]
    at Object.isArrayEqualTo (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-simple/test.js:72:54)
    at Tests.testFibonacciUpToTwoWorks (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-simple/test.js:20:24)
    at /Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-simple/test.js:53:21
    at Array.forEach (<anonymous>)
    at Object.<anonymous> (/Users/alexanderbird/code/personal/first-principle-unit-tests/javascript-simple/test.js:51:4)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
```
