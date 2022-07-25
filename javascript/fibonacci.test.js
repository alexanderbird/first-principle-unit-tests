const { fibonacci } = require('./fibonacci');
const { arrayEquals } = require('./test/assertions');

const tests = [];

tests.push(function testUpToOneIncludesTwoOnes() {
  const result = fibonacci(1);

  arrayEquals(result, [1,1]);
});

tests.forEach(test => {
  console.log(' - ' + test.name);
  test()
});
