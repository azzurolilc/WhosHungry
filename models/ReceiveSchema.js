var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var receiveSchema = mongoose.Schema({
  receriverId: Schema.ObjectId
  itemId: Schema.ObjectId,
  count: Number,
  timeStamp: {
    type:Date,
    default: Date.now
  },
  completed: Boolean,
})
module.exports = mongoose.model('receive', receiveSchema);
