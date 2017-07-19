"use strict";

var mongoose = require( 'mongoose' );
var mongoDBConfig = require('../MongoDBConfig');

var MongoUser = require('../MongoUser.js');
var MongoCar = require('../MongoCar.js');
// var MongoFillUp = require('../MongoFillUp.js');

// Create the database connection 
mongoose.connection.close();

// Unit under test
var DBLink = require('../DBLink.js');

describe('DBLink object', () => {
	beforeAll(() => {
		console.log("Open...");
		mongoose.connect(mongoDBConfig.dbURI);
	});
	afterAll(() => {
		mongoose.connection.close();
		console.log("...Close");
	});

	it('should exist', () => {
		expect(DBLink).toBeDefined();
	});
	it('should have getCars method', () => {
		expect(DBLink.getCars).toBeDefined();
	});
	it('should have getCarById method', () => {
		expect(DBLink.getCarById).toBeDefined();
	});
	it('should have getFillUps method', () => {
		expect(DBLink.getFillUps).toBeDefined();
	});
	it('should have getFillUpById method', () => {
		expect(DBLink.getFillUpById).toBeDefined();
	});
	it('should have getReminders method', () => {
		expect(DBLink.getReminders).toBeDefined();
	});
	it('should have getReminderById method', () => {
		expect(DBLink.getReminderById).toBeDefined();
	});
	it('should have getCarAvatar method', () => {
		expect(DBLink.getCarAvatar).toBeDefined();
	});
	
	describe('getCars method', () => {
		it('should return a Promise', () => {
			expect(DBLink.getCars('sample') instanceof Promise).toBe(true);
		});
		it('should return cars array of length 3', done => {
			DBLink.getCars('sample').then(cars => {
				expect(cars.length).toBe(3); // Initial database has 3 cars for username 'sample'
				done();
			})
			.catch(err => {
				console.log(err);
				done();
			});
		});
		it('should return cars array where name of the first car is "Hot Rod"', done => {
			DBLink.getCars('sample').then(cars => {
				expect(cars[0].name).toBe('Hot Rod'); // Check the name of the first car
				done();
			})
			.catch(err => {
				console.log(err);
				done();
			});
		});
	});

	describe('getCarById method', () => {
		it('should return a Promise', () => {
			expect(DBLink.getCarById('sample') instanceof Promise).toBe(true);
		});
		it('should return MongoCar document', (done) => {
			MongoUser
				.findOne({'username': 'sample'}, (err, foundUser) => {
					if (err) console.log(err);
					else {
						DBLink.getCarById(foundUser.cars[0]).then(car => {
							expect(car.name).toBe('Hot Rod');	// name of the first car in test database
							done();														// is 'Hot Rod'
						})
						.catch(err => console.log(err));
					}
				});
		});
	});

	describe('getFillUps method', () => {
		it('should return a Promise', () => {
			expect(DBLink.getFillUps('sample') instanceof Promise).toBe(true);
		});
		it('should return MongoFillUps array', (done) => {
			MongoUser
				.findOne({'username': 'sample'}, (err, foundUser) => {
					if (err) console.log(err);
					else {
						DBLink.getFillUps(foundUser.cars[0]).then(fillUps => {
							expect(fillUps[0].station).toBe('Fabrikam'); // station of the first
							done(); // fillup of the first car in the database is 'Fabrikam'
						})
						.catch(err => console.log(err));
					}
				});
		});
	});
	
	describe('addFillUp method', () => {
		it('should correctly add a fill up MongoCar document', (done) => {
			var newFillUp = {quantity: 7, pricePerGalon: 2,	date: '2016-12-23',
					station: 'Srle',	odometer: 543654};
		  var fillUpsNumber = 0;

			MongoUser
				.findOne({'username': 'sample'}, (err, foundUser) => {
					if (err) console.log(err);
					else {
						DBLink
						.getFillUps(foundUser.cars[0])
						.then(fillUps => {
							fillUpsNumber = fillUps.length; 
							return DBLink.addFillUp(foundUser.cars[0], newFillUp);
						})
						.then(() => {
							return DBLink.getFillUps(foundUser.cars[0]);
						})
						.then(fillUps => {
							expect(fillUps.length).toBe(fillUpsNumber + 1);
							done();
						})
						.catch(err => console.log(err));
					}
				});
		});
	});

	describe('deleteFillUp method', () => {
		it('should correctly delete a fill up from MongoCar document', (done) => {
		  var fillUpsNumber = 0;

			MongoUser
				.findOne({'username': 'sample'}, (err, foundUser) => {
					if (err) console.log(err);
					else {
						DBLink
						.getCarById(foundUser.cars[0])
						.then(car => {
							fillUpsNumber = car.fillUps.length; 
							if (fillUpsNumber > 0) {
								return DBLink.deleteFillUp(car._id, car.fillUps[0]);
							}
							else {
								fillUpsNumber = 1;
								return Promise.resolve();
							}
						})
						.then(() => {
							return DBLink.getFillUps(foundUser.cars[0]);
						})
						.then(fillUps => {
							expect(fillUps.length).toBe(fillUpsNumber - 1);
							done();
						})
						.catch(err => console.log(err));
					}
				});
		});
	});

});
