"use strict";

var MongoUser = require('./MongoUser.js');
var MongoCar = require('./MongoCar.js');
var MongoFillUp = require('./MongoFillUp.js');
var MongoReminder = require('./MongoReminder.js');
var MongoCarImage = require('./MongoCarImage.js');

/**
 * This class marshals CRUD operations against MongoDB Database
 * It has methods for CRUD against cars, fill ups and reminders collections
 *
 * @class DBLink //
 */
var DBLink = { 
/**
 * Accepts a user name as a parameter and returns
 * basic data of this user as a Promise
 *
 * @method getUser
 * @param username
 * @return {User}
 */
	getUser: function (username) {
		return new Promise((resolve, reject) => {
			MongoUser
				.findOne({'username': username})
				.exec((err, foundUser) => {
				if (err) reject(err);
				else resolve(foundUser);
			});
		});
	},
/**
 * Create new user
 *
 * @method createUser
 * @param username
 * @return {Promise(boolen)} false on success
 */
 createUser: function(username) {
 	return new Promise((resolve, reject) => {
 		MongoUser.findOne({username:username}, (err, user) =>{
 			if (err) reject(err);
 			if (user) {
 				resolve("User name already exists.");
 				return;
 			}
	 		let newUser = new MongoUser({
	 			username: username,
	 			registrationCompleted: false
	 		});
	 		newUser.save(err => {
	 			if (err) reject(false);
	 			resolve(false);	// false for no errors
	 		})
 		})
 	});
 },
 /**
 	* Accepts user as a parameter and updates
 	* it. Returns an empty promise.
	*
	* @method updateUser
	* @param user
	* @return {Promise}
	*/
	updateUser: function (user) {
		return new Promise((resolve, reject) => {
			MongoUser.findOne({username: user.username}, (err, foundUser) => {
				if (err) reject(err);
				foundUser.displayName = user.displayName;
				foundUser.country = user.country;
				foundUser.postalCode = user.postalCode;
				foundUser.registrationCompleted = user.registrationCompleted;
				foundUser.save(err => {
					if (err) reject(err);
					else resolve();
				})
			});
		});
	},
/**
 * Checks if the user of a given user name exists
 */
 findUser: function(username) {
 	return new Promise((resolve, reject) => {
 		MongoUser.findOne({username: username}, (err, user) => {
 			if (err) reject (err);
 			resolve(user);
	 	});
 	})
 },
/**
 * Adds new car
 *
 * @method addCar
 * @param username
 * @param newCar
 * @param base64String Image in base64 format
 * @return {MongoCar[]}
 */
 addCar: function(username, newCar, base64String) {
 	return new Promise((resolve, reject) => {
	 	var imageType;
	 	var base64Image;
	 	var car;

	 	if (base64String) {
	 		if (base64String.slice(0, 14) === 'data:image/png') {
	 			imageType = 'image/png';
	 			base64Image = base64String.replace(/^data:image\/png;base64,/, "");
	 		}
	 		else if (base64String.slice(0, 15) === 'data:image/jpeg') {
	 			imageType = 'image/jpeg';
	 			base64Image = base64String.replace(/^data:image\/jpeg;base64,/, "");	
	 		}
	 		else
	 			reject('Unknown image type');
	 	}
	 	let saveImage = new Promise((resolve, reject) => {
		 	if (base64Image) {
		 		let carImage = new MongoCarImage({
					data: Buffer.from(base64Image, 'base64'),
					contentType: imageType
				});
				carImage.save(err => {
					if (err) reject(err);
					resolve(carImage);
				});
		 	}
		 	else {
		 		MongoCarImage.findOne({'name': 'placeholder'}, (err, image) => {
		 			if (err) reject(err);
		 			resolve(image);
		 		});
		 	}
	  });
 		saveImage.then(carImage => {
			car = new MongoCar(newCar);
			car.avatar = carImage;
			car.save(err => {
				if (err) reject(err);
				MongoUser.findOne({'username': username}, (err, user) => {
					if (err) reject(err);
					user.cars.push(car);
					user.save(err => {
						if (err) reject(err);
						resolve(car);
					})
				});
			});
 		})
 		.catch(err => console.log('Error: ' + err));
 	});
 },
 /**
 * Updates car
 *
 * @method addCar
 * @param updatedCar
 * @param base64String Image in base64 format
 */
 updateCar: function(updatedCar, base64String) {
 	return new Promise((resolve, reject) => {
	 	var imageType;
	 	var base64Image;

	 	if (base64String) {
	 		if (base64String.slice(0, 14) === 'data:image/png') {
	 			imageType = 'image/png';
	 			base64Image = base64String.replace(/^data:image\/png;base64,/, "");
	 		}
	 		else if (base64String.slice(0, 15) === 'data:image/jpeg') {
	 			imageType = 'image/jpeg';
	 			base64Image = base64String.replace(/^data:image\/jpeg;base64,/, "");	
	 		}
	 		else
	 			reject('Unknown image type');
	 	}
	 	let saveImage = new Promise((resolve, reject) => {
		 	if (base64Image) {
		 		let carImage = new MongoCarImage({
					data: Buffer.from(base64Image, 'base64'),
					contentType: imageType
				});
				carImage.save(err => {
					if (err) reject(err);
					resolve(carImage);
				});
		 	}
		 	else {
	 			resolve();
		 	}
	  });
 		saveImage.then(carImage => {
			MongoCar.findById(updatedCar.id)
			.populate('avatar')
			.exec((err, car) => {
				if (err) reject(err);
				if (carImage) {
					if (!car.avatar.name) {	// don't delete placeholder image
						MongoCarImage.findByIdAndRemove(car.avatar._id, err => {
							if (err) reject(err);
						});
					}
					car.avatar = carImage;
				}
				car.name = updatedCar.name;
				car.model = updatedCar.model;
				car.year = updatedCar.year;
				car.save(err => {
					if (err) reject(err);
					resolve();
				});
			});
 		})
 		.catch(err => console.log('Error: ' + err));
 	});
 },
/**
 * This method accepts a user name as a parameter and returns
 * All the cars of this user as a Promise
 *
 * @method getCars
 * @param username
 * @return {MongoCar[]}
 */
	getCars: function (username) {
		return new Promise((resolve, reject) => {
			MongoUser
				.findOne({'username': username})
				.populate('cars')
				.exec((err, foundUser) => {
				if (err) reject(err);
				else resolve(foundUser.cars);
			});
		});
	},
 /**
 	* This method accepts car id as a parameter and returns the
 	* corresponding car document in the cars MongoDB collection
 	* as a Promise
	*
	* @method getCarById
	* @param carId
	* @return {MongoCar}
	*/
	getCarById: function(carId) {
		return new Promise((resolve, reject) => {
			MongoCar.findById(carId, (err, car) => {
				if (err) reject(err);
				else resolve(car);
			});
		});
	},
	/**
 	* This method accepts car id as a parameter and deletes
 	* the car. Returns an empty promise.
	*
	* @method updateFillUp
	* @param carId
	* @return {Promise}
	*/
	deleteCar: function(username, carId) {
		return new Promise((resolve, reject) => {
			MongoCar
				.findById(carId)
				.populate('avatar')
				.exec((err, car) => {
				if (err) reject(err);

				// Delete all fill ups
				let promises = [];
				let promise;
				for (let fillUp of car.fillUps) {
					promise = new Promise((resolve, reject) => {
						MongoFillUp.findByIdAndRemove(fillUp, err => {
							if (err) reject(err);
							resolve();
						});
					});
					promises.push(promise);
				}
				Promise.all(promises)
				.then(() => {
					// Delete all reminders
					let promises = [];
					let promise;
					for (let reminder of car.reminders) {
						promise = new Promise((resolve, reject) => {
							MongoReminder.findByIdAndRemove(reminder, err => {
								if (err) reject(err);
								resolve();
							});
						});
						promises.push(promise);
					}
					return Promise.all(promises);
				})
				.then(() => {
					// Delete image if it is not the placeholder image
					if (car.avatar.name !== 'placeholder') {
						MongoCarImage.findByIdAndRemove(car.avatar._id, err => {
							if (err) reject (err);
						});
					}
					// Finally, delete the car
					MongoCar.findByIdAndRemove(carId, err => {
						if (err) reject(err);
						MongoUser.findOne({'username': username}, (err, user) => {
							if (err) reject(err);
							let newCars = user.cars.filter(car => {
								return (car.toString() !== carId);
							});
							user.cars = newCars;
							user.save(err => {
								if (err) reject(err);
								resolve();
							});
						});
					});
				})
				.catch(err => reject(err));
			}); // exec
		}); // Promise
	},
	/**
 	* This method accepts car id as a parameter and returns 
 	* all the fill ups of the corresponding car document as a Promise
	*
	* @method getFillUps
	* @param carId
	* @return {MongoFillUp[]}
	*/
	getFillUps: function (carId) {
		return new Promise((resolve, reject) => {
			MongoCar
				.findById(carId)
				.populate('fillUps')
				.exec((err, foundCar) => {
				if (err) reject(err);
				else resolve(foundCar.fillUps);
			});
		});
	},
	/**
 	* This method accepts fill up id as a parameter and returns the
 	* corresponding fill up document in the fill ups MongoDB collection
 	* as a Promise
	*
	* @method getFillUpById
	* @param fillUpId
	* @return {MongoFillUp}
	*/
	getFillUpById: function(fillUpId) {
		return new Promise((resolve, reject) => {
			MongoFillUp.findById(fillUpId, (err, fillUp) => {
				if (err) reject(err);
				else resolve(fillUp);
			});
		});
	},
	/**
 	* This method accepts car id and a fill up as parameters and adds a
 	* new fill up in the car document. Return newly saved fill up.
	*
	* @method addFillUp
	* @param carId
	* @param fillUp
	* @return {Promise<MongoFillUp>}
	*/
	addFillUp: function (carId, fillUp) {
		return new Promise((resolve, reject) => {
			var newFillUp = new MongoFillUp(fillUp);
			newFillUp.save(err => {
				if (err) reject(err);
				MongoCar.findById(carId, (err, car) => {
					if (err) reject(err);
					car.fillUps.push(newFillUp);
					car.save((err, car) => {
						if (err) reject(err);
						resolve(newFillUp);
					})
				});
			})
		});
	},
	/**
 	* This method accepts fill up as a parameter and updates
 	* it. Returns an empty promise.
	*
	* @method updateFillUp
	* @param fillUp
	* @return {Promise}
	*/
	updateFillUp: function (fillUp) {
		return new Promise((resolve, reject) => {
			MongoFillUp.findByIdAndUpdate(fillUp.id, fillUp, (err) => {
				if (err) reject(err);
				else resolve();
			});
		});
	},
	/**
 	* This method accepts car id and fill up id as parameters and deletes
 	* the fill up. Returns an empty promise.
	*
	* @method updateFillUp
	* @param carId
	* @param fillUpId
	* @return {Promise}
	*/
	deleteFillUp: function (carId, fillUpId) {
		return new Promise((resolve, reject) => {
			MongoFillUp.findByIdAndRemove(fillUpId, (err) => {
				if (err) reject(err);
				MongoCar.findById(carId, (err, car) => {
					if (err) reject(err);
					let newFillUps = car.fillUps.filter(fillUp => {
						return (fillUp._id !== fillUpId);
					});
					car.fillUps = newFillUps;
					car.save(err => {
						if (err) reject(err);
						else resolve();
					})
				})
			});
		});
	},
	/**
 	* This method accepts car id as a parameter and returns 
 	* all the reminders of the corresponding car document as a Promise
	*
	* @method getReminders
	* @param carId
	* @return {MongoReminder[]}
	*/
	getReminders: function (carId) {
		return new Promise((resolve, reject) => {
			MongoCar
				.findById(carId)
				.populate('reminders')
				.exec((err, foundCar) => {
				if (err) reject(err);
				else resolve(foundCar.reminders);
			});
		});
	},
	/**
 	* This method accepts reminder id as a parameter and returns the
 	* corresponding reminder document in the reminders MongoDB collection
 	* as a Promise
	*
	* @method getReminderById
	* @param reminderId
	* @return {MongoReminder}
	*/
	getReminderById: function(reminderId) {
		return new Promise((resolve, reject) => {
			MongoReminder.findById(reminderId, (err, reminder) => {
				if (err) reject(err);
				else resolve(reminder);
			});
		});
	},
	/**
 	* This method accepts car id and a reminder as parameters and adds a
 	* new reminder in the car document. Return newly saved reminder.
	*
	* @method addReminder
	* @param carId
	* @param reminder
	* @return {Promise<MongoReminder>}
	*/
	addReminder: function (carId, reminder) {
		return new Promise((resolve, reject) => {
			var newReminder = new MongoReminder(reminder);
			newReminder.save(err => {
				if (err) reject(err);
				MongoCar.findById(carId, (err, car) => {
					if (err) reject(err);
					car.reminders.push(newReminder);
					car.save((err, car) => {
						if (err) reject(err);
						resolve(newReminder);
					})
				});
			})
		});
	},
	/**
 	* This method accepts reminder as a parameters and updates
 	* it. Returns an empty promise.
	*
	* @method updateReminder
	* @param reminder
	* @return {Promise}
	*/
	updateReminder: function (reminder) {
		return new Promise((resolve, reject) => {
			MongoReminder.findByIdAndUpdate(reminder.id, reminder, (err) => {
				if (err) reject(err);
				else resolve();
			});
		});
	},
	/**
 	* This method accepts car id and reminder id as parameters and deletes
 	* the reminder. Returns an empty promise.
	*
	* @method deleteReminder
	* @param carId
	* @param reminderId
	* @return {Promise}
	*/
	deleteReminder: function (carId, reminderId) {
		return new Promise((resolve, reject) => {
			MongoReminder.findByIdAndRemove(reminderId, (err) => {
				if (err) reject(err);
				MongoCar.findById(carId, (err, car) => {
					if (err) reject(err);
					let newReminders = car.reminders.filter(reminder => {
						return (reminder._id !== reminderId);
					});
					car.reminders = newReminders;
					car.save(err => {
						if (err) reject(err);
						else resolve();
					})
				})
			});
		});
	},
	/**
 	* This method accepts car name as a parameter and returns the
 	* image of this car from carimage MongoDB collection as a Promise
	*
	* @method getCarAvatar
	* @param carName
	* @return {Promise<MongoCarImage>}
	*/
	getCarAvatar: function(carId) {
		return new Promise((resolve, reject) => {
			if (!carId) 
				reject(new ReferenceError("Parameter must be non-empty string"));
			MongoCar
			.findById(carId)
			.populate('avatar')
			.exec((err, car) => {
				if (err) reject(err);	

				// car will be 'null' if there is no car under this name
				if (car) {
					resolve(car.avatar);
				}
				else {
					reject(new ReferenceError("Car named " + carName + " was not found in the database"));
				}
			});
		});
	}
}

module.exports = DBLink;