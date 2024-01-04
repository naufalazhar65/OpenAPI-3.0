'use strict';

var utils = require('../utils/writer.js');
var Todos = require('../service/TodosService');

module.exports.cREATEATODOS = function cREATEATODOS (req, res, next, body, userId) {
  Todos.cREATEATODOS(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gETUSERTODOS = function gETUSERTODOS (req, res, next, userId) {
  Todos.gETUSERTODOS(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
