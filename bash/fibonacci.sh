fibonacci() {
  max=$1
  if [[ "$max" -le 0 ]]
  then
    >&2 echo "The first parameter must be greater than zero but was $max"
  fi

  result="1 1"
  last=1
  secondLast=1
  while [[ $last -lt $max ]]
  do
    next=$(($last + $secondLast))
    if [[ $next -gt $max ]]
    then
      break
    fi
    result="$result $next"
    secondLast=$last
    last="$next"
  done
  echo "$result"
}
