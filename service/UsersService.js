'use strict';


/**
 * CREATE NEW USER
 * Create a new user by providing necessary details.
 *
 * body Users_body 
 * no response value expected for this operation
 **/
exports.cREATENEWUSER = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * DELETE USER
 * Delete a user by providing their ID.
 *
 * userId Integer (Required) (Required) ID of the user to delete
 * no response value expected for this operation
 **/
exports.dELETEUSER = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * EDIT USER
 * Update details of a user by providing their ID.
 *
 * body Users_userId_body 
 * userId Integer (Required)
 * no response value expected for this operation
 **/
exports.eDITUSER = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * GET USER
 * Retrieve information about a user by providing their ID.
 *
 * userId Integer (Required) (Required) ID of the user to retrieve
 * no response value expected for this operation
 **/
exports.gETUSER = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

