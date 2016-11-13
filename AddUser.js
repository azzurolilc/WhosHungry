var mongoose = require('mongoose')
  , User = require('./models/userSchema')
  , Schema = mongoose.Schema
  , DB = require('./config/db')
  ;

//mongo ds151707.mlab.com:51707/azl -u admin -p deltasquad

function AddUser(name,password,email,lon,lat){
  mongoose.connect(DB.URI, function () {
    var user = new User();
    user.name = name;
    user.password = password;
    user.email = email;
    user.location = {'lon':lon,'lat':lat};
    user.save(function(err){
      console.log("Saved User " + user.name);
      mongoose.connection.close();
    })
  })
}

AddUser("nuraierj","dnjaekf","dneakwjf@bhvejafb.com",99,100)
