"use strict";

var hljs = require('highlight.js');

exports.name = 'beautiful-json';
exports.outputFormat = 'html';

exports.render = function (str, options) {
  var code = JSON.stringify(JSON.parse(str), null, '  ');
  return hljs.highlightAuto(code).value
}
