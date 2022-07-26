#!/bin/bash

source ./fibonacci.sh

assertEquals() {
  actual="$1"
  expected="$2"

  if [[ "$actual" != "$expected" ]]
  then
    echo "Expected '$actual' to equal '$expected'"
  fi
}

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

eval "$(declare -F | awk '{ print $3 }' | grep -E "^test")"

