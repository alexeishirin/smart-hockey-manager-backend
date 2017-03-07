var admin = require("firebase-admin");
var firebaseAdminConfig = require("./../firebase.admin.config.json");

module.exports = function (app){
  console.log("here");
  console.log(firebaseAdminConfig);
  admin.initializeApp({
    credential: admin.credential.cert(firebaseAdminConfig),
    databaseURL: "https://derelict-147413.firebaseio.com"
  });

};
