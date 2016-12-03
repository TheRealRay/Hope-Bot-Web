import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/HopeBotDatabase');

const entrySchema = mongoose.Schema({
  userID: String,
  entryText: String,
  timestamp: String
}, { collection: 'diaryEntries' });

// The id of the use we want is '1309957369037268'
entrySchema.statics.findByID = function (id, callback) {
  return this.find({ userID: id }, callback);
};

export default mongoose.model('diaryEntries', entrySchema);
