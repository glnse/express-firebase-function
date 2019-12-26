const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const expressServer = require('./app');
const api = functions.https.onRequest((request, response) => {
    if (!request.path) {
      request.url = `/${request.url}`; // Prepend '/' to keep query params if any
    }
    return expressServer(request, response);
});

module.exports = {
    api
};