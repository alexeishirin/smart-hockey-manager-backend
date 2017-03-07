'use strict';

var firebaseService = require('./../../server/services/firebase.service');

module.exports = function(Map) {

  Map.observe('after save', function(ctx, next) {
    if (ctx.instance) {
      firebaseService.saveMap(ctx.instance);
    }
    next();
  });

  Map.observe('after delete', function(ctx, next) {
    if (ctx.instance) {
      kjkjkoj
      firebaseService.deleteMap(ctx.instance);
    }
    next();
  });
};
