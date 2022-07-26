## Bash example

`./fibonacci.test.sh`

```
testFibonacciWithAMaxOfNegativeOneGivesAHelpfulErrorMessage
testFibonacciWithAMaxOfThirtyGivesTheSequenceUpToTwentyOne
testFibonacciWithAMaxOfTwoGivesTheSequenceUpToTwo
testFibonacciWithAMaxOfZeroGivesAHelpfulErrorMessage
```

With off by one error:

```
diff --git a/bash/fibonacci.sh b/bash/fibonacci.sh
index fff23b0..65f1a73 100644
--- a/bash/fibonacci.sh
+++ b/bash/fibonacci.sh
@@ -11,10 +11,6 @@ fibonacci() {
   while [[ $last -lt $max ]]
   do
     next=$(($last + $secondLast))
-    if [[ $next -gt $max ]]
-    then
-      break
-    fi
     result="$result $next"
     secondLast=$last
     last="$next"
```

```
testFibonacciWithAMaxOfNegativeOneGivesAHelpfulErrorMessage
testFibonacciWithAMaxOfThirtyGivesTheSequenceUpToTwentyOne
Expected '1 1 2 3 5 8 13 21 34' to equal '1 1 2 3 5 8 13 21'
testFibonacciWithAMaxOfTwoGivesTheSequenceUpToTwo
testFibonacciWithAMaxOfZeroGivesAHelpfulErrorMessage
```

Without the parameter validation:

```
diff --git a/bash/fibonacci.sh b/bash/fibonacci.sh
index fff23b0..d389405 100644
--- a/bash/fibonacci.sh
+++ b/bash/fibonacci.sh
@@ -1,9 +1,5 @@
 fibonacci() {
   max=$1
-  if [[ "$max" -le 0 ]]
-  then
-    >&2 echo "The first parameter must be greater than zero but was $max"
-  fi

   result="1 1"
   last=1
```

```
testFibonacciWithAMaxOfNegativeOneGivesAHelpfulErrorMessage
Expected '' to equal 'The first parameter must be greater than zero but was -1'
testFibonacciWithAMaxOfThirtyGivesTheSequenceUpToTwentyOne
testFibonacciWithAMaxOfTwoGivesTheSequenceUpToTwo
testFibonacciWithAMaxOfZeroGivesAHelpfulErrorMessage
Expected '' to equal 'The first parameter must be greater than zero but was 0'
```

