var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  location: {
    lon:Number,
    lat:Number
  },
  // address:{
  //   type: String,
  //   country:{
  //     type: String,
  //     trim:true,
  //     uppercase:true,
  //     default: "US"
  //   }
  //   state: String,
  //   city: String,
  //   street1: String,
  //   street2: String,
  //   zip:Number
  // }
  date:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', userSchema);
