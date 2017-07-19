"use strict";

var mongoose = require('mongoose');

var MongoFillUp = require('./MongoFillUp');
var MongoReminder = require('./MongoReminder');
var MongoCarImage = require('./MongoCarImage');

var CarSchema = new mongoose.Schema ({	// just an image saved in MongoDB as a binary buffer, required by RoomSchema
  name: String,
  model: String,
  year: String,
  fillUps: [{type: mongoose.Schema.Types.ObjectId, ref: 'FillUp'}],
  reminders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reminder'}],
  avatar: {type: mongoose.Schema.Types.ObjectId, ref: 'CarImage'}
});
var MongoCar = mongoose.model('Car', CarSchema);

module.exports = MongoCar;
