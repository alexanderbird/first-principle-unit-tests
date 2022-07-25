const tests = [];
const describe = defineTests => { defineTests(); tests.forEach(x => x()) };
const test = (name, body) => tests.push(() => { console.log(name); body() });
module.exports = { describe, test };
