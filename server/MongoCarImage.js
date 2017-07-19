"use strict";

var mongoose = require('mongoose');

var CarImageSchema = new mongoose.Schema({
	 name: String,
	 data: {type:Buffer, required:true },
	 contentType: { type: String, required: true },
	 tmpPath: String
});

var MongoCarImage = mongoose.model('CarImage', CarImageSchema);

module.exports = MongoCarImage;

