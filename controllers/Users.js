'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.cREATENEWUSER = function cREATENEWUSER (req, res, next, body) {
  Users.cREATENEWUSER(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dELETEUSER = function dELETEUSER (req, res, next, userId) {
  Users.dELETEUSER(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eDITUSER = function eDITUSER (req, res, next, body, userId) {
  Users.eDITUSER(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gETUSER = function gETUSER (req, res, next, userId) {
  Users.gETUSER(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
