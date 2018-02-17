import express from 'express'
import path from 'path';

const server = express();
const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config);
require("webpack-mild-compile");
const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);
const webpackHotMiddlware = require("webpack-hot-middleware")(compiler);
server.use(webpackDevMiddleware);
server.use(webpackHotMiddlware);
const staticMiddleware = express.static('dist');
server.use(staticMiddleware);
const PORT = 8080;
debugger;
server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})