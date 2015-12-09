/*
  This file was taken from webpack and modified.
  https://github.com/webpack/url-loader/blob/master/index.js

  Original Author: Tobias Koppers @sokra
  Modifications: Dominik Ferber @dferber90
 */

var loaderUtils = require("loader-utils");

module.exports = function(content) {
  this.cacheable && this.cacheable();
  var query = loaderUtils.parseQuery(this.query);
  var url = loaderUtils.interpolateName(this, query.name || "[hash].[ext]", {
    context: query.context || this.options.context,
    content: content,
    regExp: query.regExp
  });
  return "module.exports = __webpack_public_path__ + " + JSON.stringify(url) + ";";
}
module.exports.raw = true;
