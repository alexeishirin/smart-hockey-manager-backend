// Import Admin SDK
var admin = require("firebase-admin");
var loopback = require('loopback');
var _ = require('lodash');

module.exports = {
  saveMap: saveMap,
  deleteMap: deleteMap,
  saveHex: saveHex,
  deleteHex: deleteHex,
  getFirebaseToken: getFirebaseToken
};

function saveMap(map) {
  var db = admin.database();
  var mapRef = db.ref("maps");
  var mapCopy = map.toJSON();
  mapCopy.id += '';
  mapRef.child(mapCopy.id).set(mapCopy);
}

function deleteMap(mapId) {
  var db = admin.database();
  var mapRef = db.ref("maps/" + mapId);
  mapRef.remove();
}

function saveHex(hex) {
  var db = admin.database();
  var hexRef = db.ref("maps/" + hex.mapId + "/hexes/x" + hex.x + "y" + hex.y);
  var hexCopy = hex.toJSON();
  hexCopy.id += '';
  hexCopy.mapId += '';
  console.log(hexCopy);
  hexRef.set(hexCopy);
}

function deleteHex(hex) {
  var db = admin.database();
  var hexRef = db.ref("maps/" + hex.mapId + "/hexes/x" + hex.x + "y" + hex.y);
  hexRef.remove();
}

function getFirebaseToken(options, cb) {
  const token = options && options.accessToken;
  const userId = token && token.userId;

  console.log(token);
  if (userId) {
    admin.auth().createCustomToken(userId + "")
      .then(function (customToken) {
        cb(null, {token: customToken});
      })
      .catch(function (error) {
        console.log("Error creating custom token:", error);
        cb(error, null);
      });
  } else {
    var error = new Error('User is not logged in');
    error.statusCode = 401;
    error.code = 'USER_NOT_LOGGED_IN';
    cb(error, null);
  }
};
