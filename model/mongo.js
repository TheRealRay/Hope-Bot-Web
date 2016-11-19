var config = require('../config');
var logger = require('../utils/loggingUtils');
var mongoClient = require('mongodb').MongoClient;

exports.findEntriesByID = function (id, date, callback) {
  mongoClient.connect(config.MONGO_URL, function (error, db) {
    if (!error) {
      var query = {
        userID: id
      };

      db.collection(config.DIARY_ENTRIES).find(query).toArray(function (error, docs) {
        if (!error) {
          logger.info('Found documents!');
          callback(null, docs);
        } else {
          logger.error('could not find documents');
          callback(error, null);
        }
      });
    } else {
      logger.error('Error connecting to db');
      callback(error, null);
    }
  });
};
