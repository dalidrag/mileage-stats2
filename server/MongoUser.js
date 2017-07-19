"use strict";

var mongoose = require('mongoose');

var MongoCar = require('./MongoCar');

var UserSchema = new mongoose.Schema ({	// just an image saved in MongoDB as a binary buffer, required by RoomSchema
  username: String,
  displayName: String,
  country: String,
  postalCode: Number,
  cars: [{type: mongoose.Schema.Types.ObjectId, ref: 'Car'}],
  registrationCompleted: Boolean
});
var MongoUser = mongoose.model('User', UserSchema);

module.exports = MongoUser;
