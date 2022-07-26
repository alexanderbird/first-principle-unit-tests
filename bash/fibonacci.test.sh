#!/bin/bash

source ./fibonacci.sh
source ./assertions.sh

testFibonacciWithAMaxOfZeroGivesAHelpfulErrorMessage() {
  echo "${FUNCNAME[0]}"
  result="$(fibonacci 0 2>&1 >/dev/null)"
  assertEquals "$result" "The first parameter must be greater than zero but was 0"
}

testFibonacciWithAMaxOfNegativeOneGivesAHelpfulErrorMessage() {
  echo "${FUNCNAME[0]}"
  result="$(fibonacci -1 2>&1 >/dev/null)"
  assertEquals "$result" "The first parameter must be greater than zero but was -1"
}

testFibonacciWithAMaxOfTwoGivesTheSequenceUpToTwo() {
  echo "${FUNCNAME[0]}"
  actual="$(fibonacci 2)"
  assertEquals "$actual" "1 1 2"
}

testFibonacciWithAMaxOfThirtyGivesTheSequenceUpToTwentyOne() {
  echo "${FUNCNAME[0]}"
  actual="$(fibonacci 30)"
  assertEquals "$actual" "1 1 2 3 5 8 13 21"
}

source ./testRunner.sh
