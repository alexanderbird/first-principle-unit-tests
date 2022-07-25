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

module.exports = { Sequence };
