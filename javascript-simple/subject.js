function fibonacci(max) {
  if (max < 0) { throw new Error(`Invalid parameter: expected a number greater than or equal to zero, got ${max}`); }
  if (max === 0) return [];
  const result = [1,1];
  while (result[result.length - 1] < max) {
    const last = result[result.length - 1];
    const secondLast = result[result.length - 2];
    const next = last + secondLast;
    if (next < max) {
      result.push(next);
    } else {
      break;
    }
  }
  return result;
}

module.exports = { fibonacci };
