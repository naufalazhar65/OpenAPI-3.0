'use strict';

var utils = require('../utils/writer.js');
var Comments = require('../service/CommentsService');

module.exports.cREATEACOMMENTS = function cREATEACOMMENTS (req, res, next, body, userId) {
  Comments.cREATEACOMMENTS(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
