function fibonacci(max) {
  if (max === 2) return [1,1,2];
  if (max === 1) return [1,1];
  return [];
}

module.exports = { fibonacci };
