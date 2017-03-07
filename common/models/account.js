'use strict';

var firebaseService = require('./../../server/services/firebase.service');

module.exports = function(Account) {
  Account.remoteMethod('getFirebaseToken', {
    description: 'Get firebase auth token',
    accepts: [
      {"arg": "options", "type": "object", "http": "optionsFromRequest"}
    ],
    returns: {arg: 'token', type: 'object', root: true},
    http: {
      verb: 'get',
      path: '/getFirebaseToken'
    }
  });

  Account.getFirebaseToken = firebaseService.getFirebaseToken;

};
