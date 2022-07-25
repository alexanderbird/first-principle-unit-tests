const { fibonacci } = require('./fibonacci');
const { arrayEquals } = require('./test/assertions');

function testUpToOneIncludesTwoOnes() {
  const result = fibonacci(1);

  arrayEquals(result, [1,1]);
}

testUpToOneIncludesTwoOnes();
