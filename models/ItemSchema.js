var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var itemSchema = mongoose.Schema({
  name: String,
  photo: String,
  amount: {
    number: Number,
    unit: String
  },
  available: Boolean,
  created: {
    type:Date,
    default: Date.now
  },
  expiration: Date,
  location:{
    address:{
        type: String,
        country:{
          type: String,
          trim:true,
          uppercase:true,
          default: "US"
        },
        state: String,
        city: String,
        street1: String,
        street2: String,
        zip:Number
    }
    lon:Number,
    lat:Number
  },
  userId: Schema.ObjectId
})

module.exports = mongoose.model('item', itemSchema);
