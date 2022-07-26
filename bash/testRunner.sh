eval "$(declare -F | awk '{ print $3 }' | grep -E "^test")"
