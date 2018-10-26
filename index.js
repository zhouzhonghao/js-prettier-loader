var path = require("path");
var webpack = require("webpack");
var loaderUtils = require('loader-utils');
var prettier = require('prettier');

var jsBeautifyLoader = function(source) {
  var options = loaderUtils.getOptions(this);
  return prettier.format(source, options);
};

module.exports = jsBeautifyLoader;

