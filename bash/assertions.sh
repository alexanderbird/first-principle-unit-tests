assertEquals() {
  actual="$1"
  expected="$2"

  if [[ "$actual" != "$expected" ]]
  then
    echo "Expected '$actual' to equal '$expected'"
  fi
}

