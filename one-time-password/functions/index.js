const admin = require("firebase-admin");
const functions = require("firebase-functions");
const createUser = require("./create_user");
const requestOneTimePassword = require("./request_one_time_password");

const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(
    requestOneTimePassword
);
