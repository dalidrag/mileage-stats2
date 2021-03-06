'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var mongoose = require( 'mongoose' );

var mongoDBConfig = require('./server/MongoDBConfig');
var DBLink = require('./server/DBLink.js');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
    secret: 'cookieSecret',
    saveUninitialized: false,
    resave: false
}));

/*************************************/
/* Mileage Stats REST API end points */
/*************************************/

//
app.post('/api/signUp', (req,res) => {
	DBLink.createUser(req.body.username).then(response => {
		if (response) {	// Creating user didn't succeed
			res.send({authMessage: response});
		}
		else
			res.send({authMessage: false});
	})
	.catch(err => handleError(err, res));
});
// Log in based on user name
app.post('/api/login', (req, res) => {
	DBLink.findUser(req.body.username).then(user => {
		if (user) {
			req.session.username = user.username;
			res.send({authMessage: true});
		}
		else
			res.send({authMessage: false});
	})
	.catch(err => handleError(err, res));
});
// Log out
app.get('/api/logout', (req, res) => {
	delete req.session.username;
	res.send({authMessage: 'ok'});
});
// Check if user name exists
app.post('/api/userExists', (req, res) => {
	DBLink.findUser(req.body.username).then(user => {
		if (user) 
			res.send({authMessage: true});
		else
			res.send({authMessage: false});
	})
});
// Check if user is logged in
app.get('/api/loggedIn', (req, res) => {
	if (req.session.username) {
		res.send({authMessage: true});
	}
	else res.send({authMessage: false});
});
// Update user data
app.put('/api/user/update', (req, res) => {
	var newUser = {
		username: req.body.username,
		displayName: req.body.displayName,
		country: req.body.country,
		postalCode: req.body.postalCode,
		registrationCompleted: req.body.registrationCompleted
	}
	DBLink.updateUser(newUser).then(savedUser => {
		res.send({ok: true});
	})
	.catch(err => handleError(err, res));
});
// Fetch all cars of a user of a given name
app.get('/api/cars', (req, res) => {
	DBLink.getCars(req.session.username).then((cars) => {
		res.send({ok: true, data: cars});
	})
	.catch(err => handleError(err, res));
});
// Fetch user of given username
app.get('/api/user', (req, res) => {
	DBLink.getUser(req.session.username).then((user) => {
		res.send({ok: true, data: user});
	})
	.catch(err => handleError(err, res));
});
// Fetch car of given id
app.get('/api/cars/:id', (req, res) => {
	DBLink.getCarById(req.params.id).then((car) => {
		res.send({ok: true, data: car});
	})
	.catch(err => handleError(err, res));
});
// Fetch all fill ups of a car based on car id
app.get('/api/fillUps/:carId', (req, res) => {
	DBLink.getFillUps(req.params.carId).then((fillUps) => {
		res.send({ok: true, data: fillUps});
	})
	.catch(err => handleError(err, res));
});
// Fetch a fill up of given id
app.get('/api/fillUps/one/:id', (req, res) => {
	DBLink.getFillUpById(req.params.id).then((fillUp) => {
		res.send({ok: true, data: fillUp});
	})
	.catch(err => handleError(err, res));
});
// Fetch all reminders of a car based on car id
app.get('/api/reminders/:carId', (req, res) => {
	DBLink.getReminders(req.params.carId).then((reminders) => {
		res.send({ok: true, data: reminders});
	})
	.catch(err => handleError(err, res));
});
// Fetch a reminder of given id
app.get('/api/reminders/one/:id', (req, res) => {
	DBLink.getReminderById(req.params.id).then((reminder) => {
		res.send({ok: true, data: reminder});
	})
	.catch(err => handleError(err, res));
});
// Fetch car image for a car
app.get('/api/cars/:carId/image', function (req, res) {
	DBLink.getCarAvatar(req.params.carId).then(img => {
		res.contentType(img.contentType);
		res.end(img.data);
	})
	.catch(err => handleError(err, res));
});
// Save new fill up for a car of given name
app.post('/api/fillUps/:carId', (req, res) => {
	var newFillUp = {
		quantity: req.body.quantity,
		pricePerGalon: req.body.pricePerGalon,
		date: req.body.date,
		station: req.body.station,
		odometer: req.body.odometer
	}
	DBLink.addFillUp(req.params.carId, newFillUp).then(savedFillUp => {
		res.send({ok: true, data: savedFillUp});
	})
	.catch(err => handleError(err, res));
});
// Update a fill up
app.put('/api/fillUps', (req, res) => {
	var newFillUp = {
		id: req.body.id,
		quantity: req.body.quantity,
		pricePerGalon: req.body.pricePerGalon,
		date: req.body.date,
		station: req.body.station,
		odometer: req.body.odometer
	}
	DBLink.updateFillUp(newFillUp).then(savedFillUp => {
		res.send({ok: true});
	})
	.catch(err => handleError(err, res));
});
// Delete fill up of given id from a car of given id
app.delete('/api/fillUps/:carId/:fillUpId', (req, res) => {
	DBLink.deleteFillUp(req.params.carId, req.params.fillUpId).then(() => {
		res.send({ok: true});
	})
	.catch(err => handleError(err, res));
})
// Save new reminder for a car of given id
app.post('/api/reminders/:carId', (req, res) => {
	var newReminder = {
		text: req.body.text,
		date: req.body.date
	}
	DBLink.addReminder(req.params.carId, newReminder).then(savedReminder => {
		res.send({ok: true, data: savedReminder});
	})
	.catch(err => handleError(err, res));
});
// Update a reminder
app.put('/api/reminders', (req, res) => {
	var newReminder = {
		id: req.body.id,
		text: req.body.text,
		date: req.body.date
	}
	DBLink.updateReminder(newReminder).then(savedReminder => {
		res.send({ok: true});
	})
	.catch(err => handleError(err, res));
});
// Delete reminder of given id from a car of given id
app.delete('/api/reminders/:carId/:reminderId', (req, res) => {
	DBLink.deleteReminder(req.params.carId, req.params.reminderId).then(() => {
		res.send({ok: true});
	})
	.catch(err => handleError(err, res));
})
// Save new car
app.post('/api/cars', (req, res) => {
		var newCar = { name: req.body.name, model: req.body.model, year: req.body.year }
		DBLink.addCar(req.session.username, newCar, req.body.base64Image).then(addedCar => {
			res.send({ok: true, data: addedCar});
		})
		.catch(err => handleError(err, res));
});
// Update car
app.put('/api/cars', (req, res) => {
	var newCar = { id: req.body.id, name: req.body.name, model: req.body.model, year: req.body.year }
	DBLink.updateCar(newCar, req.body.base64Image).then(() => {
		res.send({ok: true});
	})
	.catch(err => handleError(err, res));
});
// Delete car of given id
app.delete('/api/cars/:carId', (req, res) => {
	DBLink.deleteCar(req.session.username, req.params.carId).then(() => {
		res.send({ok: true});
	})
	.catch(err => handleError(err, res));
});

var handleError = function (err, res) {
	console.log("Error: " + err);	// TODO
	res.sendStatus(500);
}

// For HTML5 pushstate produced URLs
app.get('*', function(request, response) {
	response.sendFile(__dirname + '/public/index.html');
});

/***************/
/* Error pages */
/***************/
// custom 404 page
app.use((req, res) => {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// custom 500 page
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
	console.log('Mongoose default connection open to ' + mongoDBConfig.dbURI);
});
// If the connection throws an error
mongoose.connection.on('error', err => {
	console.log('Mongoose default connection error: ' + err);
});
// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
	console.log('Mongoose default connection disconnected');
} );
// When Node server exits
process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('Mongoose disconnected through app termination');
		process.exit(0);
	});
});

mongoose.connect(mongoDBConfig.dbURI);

app.listen(app.get('port'), () => {
	console.log( 'Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});
