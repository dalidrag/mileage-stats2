/* This module creates initial database for sample user */

"use strict";

var mongoose = require( 'mongoose' );
var fs=require('fs');

var mongoDBConfig = require('./MongoDBConfig');

// Create the database connection 
mongoose.connect(mongoDBConfig.dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function() {
	console.log('Mongoose default connection open to ' + mongoDBConfig.dbURI);
});

var MongoUser = require('./MongoUser');
var MongoCar = require('./MongoCar');
var MongoFillUp = require('./MongoFillUp');
var MongoReminder = require('./MongoReminder');
var MongoCarImage = require('./MongoCarImage');
/*
 */

var carImage = new MongoCarImage({
	data: fs.readFileSync('../src/assets/images/vehicle.png'),
	contentType: 'image/png',
	name: "placeholder",
	tmpPath: __dirname + "../src/assets/images/vehicle.png"
});
carImage.save(function(err){
	if (err) console.log(err);
});

var fillUps = [
	[	new MongoFillUp({quantity: 11, pricePerGalon: 2.81, date:'2017-04-28', station: 'Fabrikam', odometer: 15455}),
		new MongoFillUp({quantity: 7, pricePerGalon: 3, date:'2017-06-12', station: 'Joe', odometer: 15843}),
		new MongoFillUp({quantity: 20, pricePerGalon: 3, date:'2017-07-12', station: 'Miriam', odometer: 16000}),
	],
	[ new MongoFillUp({quantity: 11, pricePerGalon: 2.81, date:'2017-02-28', station: 'Fabrikam', odometer: 15455}),
		new MongoFillUp({quantity: 15, pricePerGalon: 2, date:'2017-03-28', station: 'Fabrikam', odometer: 15923}),
		new MongoFillUp({quantity: 8, pricePerGalon: 2.81, date:'2017-04-28', station: 'Fabrikam', odometer: 16213}),
		new MongoFillUp({quantity: 23, pricePerGalon: 1.7, date:'2017-06-28', station: 'Fabrikam', odometer: 16455})
	],
	[	new MongoFillUp({quantity: 11, pricePerGalon: 2.81, date:'2017-01-28', station: 'Fabrikam', odometer: 15455}),
		new MongoFillUp({quantity: 7, pricePerGalon: 3, date:'2017-02-12', station: 'Joe', odometer: 15843}),
		new MongoFillUp({quantity: 10, pricePerGalon: 2.81, date:'2017-04-12', station: 'Fabrikam', odometer: 16223}),
		new MongoFillUp({quantity: 4, pricePerGalon: 2.61, date:'2017-05-23', station: 'Cheepo', odometer: 16589}),
		new MongoFillUp({quantity: 24, pricePerGalon: 2, date:'2017-06-23', station: 'Cheepo', odometer: 16678})
	]
];
var reminders = [
	[ new MongoReminder({text: 'Check Fluid', date:'2030-05-07'})
	],
	[ new MongoReminder({text: 'Check Fluid', date:'2016-05-07'}),
	  new MongoReminder({text: 'Vacuum Car', date:'2016-06-03'}),
    new MongoReminder({text: 'Change Tires', date:'2016-09-23'}),
    new MongoReminder({text: 'Vacuum Car', date:'2016-10-01'}),
    new MongoReminder({text: 'Check Fluid', date:'2030-11-05'})
	],
	[ new MongoReminder({text: 'Check Fluid', date:'2016-05-07'}),
		new MongoReminder({text: 'Change Tires', date:'2016-09-23'}),
		new MongoReminder({text: 'Check Fluid', date:'2016-11-05'})
	]
];
var cars = [
	new MongoCar({name: 'Hot Rod', model: 'BMW 330xi', year:'2003', avatar: carImage}),
	new MongoCar({name: "Soccer Mom's Ride", model: 'Honda Accord LX', year: '1997', avatar: carImage}),
	new MongoCar({name: 'Mud Lover', model: 'Jeep Wrangler', year: '2011', avatar: carImage}) 
];

var user = new MongoUser({username: 'sample'});

/*
*/
  for (var i = 0; i < cars.length; ++i) {
    for (var j = 0; j < fillUps[i].length; ++j) {
      cars[i].fillUps.push(fillUps[i][j]);
      fillUps[i][j].save();
    }
    for (j = 0; j < reminders[i].length; ++j) {
      cars[i].reminders.push(reminders[i][j]);
      reminders[i][j].save(function (err) {
				if (err) console.log(err);
			});
    }
    user.cars.push(cars[i]);
    cars[i].save();
  }
  
  user.save(function (err) {
		if (err) console.log(err);
	});

	user = new MongoUser({username: 'dalibor'});
	user.save(function (err) {
		if (err) console.log(err);
	});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
	console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose default connection disconnected');
} );

// When Node server exits
process.on('SIGINT', function() {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through app termination');
		process.exit(0);
	});
});

mongoose.connection.close();