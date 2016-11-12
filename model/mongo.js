var config = require("../../config");

exports.findEntriesByID = function (id, date, callback) {
    mongoClient.connect(config.MONGO_URL, function (error, db) {
        if (!error) {
            var query = {
                userID: id
            };

            db.collection(collectionName).find(query).toArray(function (error, docs) {
                if (!error) {
                    console.log("Found documents!");
                    callback(null, docs);
                } else {
                    console.log("could not find documents");
                    callback(error, null);
                }
            });
        } else {
            console.log("Error connecting to db");
            callback(error, null);
        }
    });
};
