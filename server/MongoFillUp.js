"use strict";

var mongoose = require('mongoose');

var FillUpSchema = new mongoose.Schema ({	// just an image saved in MongoDB as a binary buffer, required by RoomSchema
	quantity: Number,
	pricePerGalon: Number,
	date: String,
	station: String,
	odometer: Number
});
var MongoFillUp = mongoose.model('FillUp', FillUpSchema);

module.exports = MongoFillUp;
