function fibonacci(max) {
  if (max === 0) return [];
  const result = new Sequence(1, 1);
  while (result.last < max) {
    result.push(result.last + result.secondLast);
  }
  return result.toArray();
}

class Sequence {
  constructor(...initialContents) {
    this.value = initialContents;
  }

  get last() {
    return this.value[this.value.length - 1];
  }

  get secondLast() {
    return this.value[this.value.length - 2];
  }

  push(value) {
    this.value.push(value);
  }

  toArray() {
    return this.value;
  }
}

module.exports = { fibonacci };
