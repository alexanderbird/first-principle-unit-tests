# 1. list all functions in scope
# 2. select those which start with "test"
# 3. execute them all
eval "$(declare -F | awk '{ print $3 }' | grep -E "^test")"
