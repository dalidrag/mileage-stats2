"use strict";

var mongoose = require('mongoose');

var ReminderSchema = new mongoose.Schema ({	
	text: String,
	date: String
});
var MongoReminder = mongoose.model('Reminder', ReminderSchema);

module.exports = MongoReminder;
