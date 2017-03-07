'use strict';

var firebaseService = require('./../../server/services/firebase.service');

module.exports = function(Hex) {
  Hex.observe('after save', function(ctx, next) {
    if (ctx.instance) {
      firebaseService.saveHex(ctx.instance);
    }
    next();
  });

  Hex.observe('after delete', function(ctx, next) {
    if (ctx.instance) {
      firebaseService.deleteHex(ctx.instance);
    }
    next();
  });
};
