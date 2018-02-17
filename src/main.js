require('babel-runtime/regenerator');
require('webpack-hot-middleware/client?reload=true');
require('./index.html');
require('./main.css');

var test = async (args) => {
  const { a, b } = args;
  await console.log('hi', a, b);
  console.log('okay yeah changing main.js works just fine as well');
};
test({ a: 1, b: 2 });