'use strict';

var utils = require('../utils/writer.js');
var Posts = require('../service/PostsService');

module.exports.cREATEAPOST = function cREATEAPOST (req, res, next, body, userId) {
  Posts.cREATEAPOST(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gETUSERPOST = function gETUSERPOST (req, res, next, userId) {
  Posts.gETUSERPOST(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
