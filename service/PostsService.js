'use strict';


/**
 * CREATE A POST
 * Create a new post for a user by providing the user's ID.
 *
 * body UserId_posts_body 
 * userId Integer (Required) (Required) ID of the user to create a post for
 * no response value expected for this operation
 **/
exports.cREATEAPOST = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * GET USER POST
 *
 * userId Integer (Required)
 * no response value expected for this operation
 **/
exports.gETUSERPOST = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

