module.exports = {
  test(name, testBody) {
    global.tests = global.tests || [];
    global.tests.push({ name, testBody });
  }
};
