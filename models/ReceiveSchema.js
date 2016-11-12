var mongoose = require('mongoose')

var receiveSchema = mongoose.Schema({
  receriverId: Schema.Types.ObjectId
  itemId: Schema.Types.ObjectId,
  count: Number,
  timeStamp: {
    type:Date,
    default: Date.now
  },
  completed: Boolean,
})
