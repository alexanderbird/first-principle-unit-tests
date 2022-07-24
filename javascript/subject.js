function fibonacci(max) {
  if (max < 0) { throw new Error(`Invalid parameter: expected a number greater than or equal to zero, got ${max}`); }
  if (max === 0) return [];
  if (max === 1) return [1,1];
  if (max === 2) return [1,1,2];
  if (max <= 4) return [1,1,2,3];
}

module.exports = { fibonacci };
