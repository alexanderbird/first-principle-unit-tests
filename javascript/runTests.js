require('./fibonacci.test.js');

(global.tests || []).forEach(({ name, testBody }) => {
  try {
    testBody();
    console.log('\x1b[32m%s\x1b[0m', ' ✔ ' + name);
  } catch(e) {
    console.log('\x1b[31m%s\x1b[0m', ' ✘ ' + name + '\n\n' + e.stack);
  }
});
