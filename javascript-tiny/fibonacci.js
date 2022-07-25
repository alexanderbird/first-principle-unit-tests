function fibonacci(max) {
  if (max <= 0) {
    throw new Error(`Max value must be greater than zero but was ${max}`);
  }
  const result = [1, 1];
  while (result[result.length - 1] < max) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

module.exports = { fibonacci };
