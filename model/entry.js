var mongoose = require('mongoose');

// Can add in custom functions to compiled model (eg findBYID)

// Redo where connection to mongoDB occurs
exports.execute = function(callback) {
    mongoose.connect('mongodb://localhost:27017/HopeBotDatabase');
    console.log("Running execute");
    var db = mongoose.connection;
    db.on('error', function(error) { console.log("ERROR CONNECTING TO DB");});
    db.once('open', function() {
        var entrySchema = new mongoose.Schema({
            userID: String,
            entryText: String,
            timestamp: String
        }, { collection: 'diaryEntries' });
        var Entries = mongoose.model('diaryEntries', entrySchema);
        // Get use ID
        Entries.find({userID: "1309957369037268"}, function (err, docs) {
            callback(docs);
        });
    });
};
