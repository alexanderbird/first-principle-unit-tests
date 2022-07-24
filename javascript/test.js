const { adder } = require('./subject');

function main() {
  testTheSumOfZeroIsZero();
}

function testTheSumOfZeroIsZero() {
  const result = adder(0, 0);

  if (result !== 0) { throw new Error('Expected 0, got ' + result); }
}

main();

console.log('PASS');

