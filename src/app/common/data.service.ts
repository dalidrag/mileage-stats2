import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Car } from './car';
import { FillUp } from './fillUp';
import { Reminder } from './reminder'
import { User } from './user';

/**
* Provides exchange of data with a back-end database
* via the HTTP server. Three collections are implemented:
* cars, fillups and reminders, with CRUD methods for each.
* Caching is implemented for all the collections.
* A single method handles eventual errors.
*
* @class DataService
**/
@Injectable()
export class DataService {
	private headers = new Headers({'Content-Type': 'application/json'});
	// URLs to web api
	private carsUrl = 'http://localhost:3000/api/cars';  
	private fillUpsUrl = 'http://localhost:3000/api/fillUps';
	private remindersUrl = 'http://localhost:3000/api/reminders';
	private usersUrl = 'http://localhost:3000/api/user';

	private carsCache = {
		data: null,
		dirty: true
	}
	private fillUpsCache: any[] = [];
	private remindersCache: any[] = [];

	clearCache(): void {
		for (let fillUpCache of this.fillUpsCache) {
			fillUpCache.dirty = true;
		}
		for (let reminderCache of this.remindersCache) {
			reminderCache.dirty = true;
		}
		this.carsCache.dirty = true;
	}

  constructor(private http: Http) { }

  getUser(): Promise<User> {
  	return this.http.get(this.usersUrl)
  	             .toPromise()		// Because Angular http service returns observable
  	             .then(response => {
  	             		return response.json().data as User; // in memory web api returns the data contained
  	             })																									// in data object, for security reasons:
  	             // https://www.owasp.org/index.php/OWASP_AJAX_Security_Guidelines#Always_return_JSON_with_an_Object_on_the_outside
  							 .catch(this.handleError);	// a single method deals with error in this class
  }
  /**
	* This method accepts an User parameter
	* and uses http to PUT an User object to update the server-side database.
	* It returns server response as a Promise, or rejects as an error message
	* or an error object if error message doesn't exist
	*
	* @method updateUser
	* @param updatedUser User object to update
	* @return {Promise} Server response
	*/
	updateUser(updatedUser: User): Promise<any> {
	  return this.http
	    .put(this.usersUrl + '/update', JSON.stringify(updatedUser), {headers: this.headers})
	    .toPromise()
	    .then(response => response)
	    .catch(this.handleError);
	}
  /**
  * This method accepts no parameters and uses http to GET
  * all the Cars of a user from the server. It returns a Promise resolved
  * as an array of Cars, or rejected as an error message or
  * an error object if error message doesn't exist
  *
  * @method getCars
  * @return {Promise<Car[]>} The array of Cars as a Promise
  */
  getCars(): Promise<Car[]> {
 		if (!this.carsCache.dirty) {
 			return Promise.resolve(this.carsCache.data);
 		}
 		else
 			return this.http.get(this.carsUrl)
  	             .toPromise()		// Because Angular http service returns observable
  	             .then(response => {
  	             		this.carsCache.data = response.json().data as Car[];
  	             		this.carsCache.dirty = false;
  	             		return response.json().data as Car[]; // in memory web api returns the data contained
  	             })																									// in data object, for security reasons:
  	             // https://www.owasp.org/index.php/OWASP_AJAX_Security_Guidelines#Always_return_JSON_with_an_Object_on_the_outside
  							 .catch(this.handleError);	// a single method deals with error in this class
  } 
	/**
	* This method accepts a single integer parameter, an id for a Car,
	* and uses it to http GET the corresponding Car data.
	* It returns a Promise resolved as a Car object,
	* or rejected as an error message or an error object
	* if error message doesn't exist
	*
	* @method getCarById
	* @return {Promise<Car>} Car object as a Promise
	*/
	getCarById(id: string): Promise<Car> {
		if (!this.carsCache.dirty) {
 			let cars = this.carsCache.data;
 			for (let car of cars) {
 				if (car.id === id)
 					return Promise.resolve(car);
 			}
 			return Promise.resolve(null);
 		}
 		else 
			return this.http.get(this.carsUrl + '/' + id)
	 	             .toPromise()
	 	             .then(response => {
	 	             		return response.json().data as Car;
	 	             	})
	 	             .catch(this.handleError);
	}
	/**
	* This method accepts a Car parameter and base64 encoded image
	* and uses http to POST new  Car to the server-side database.
	* It returns a Promise resolved as a Car object,
	* or rejected as an error message or
	* an error object if error message doesn't exist
	*
	* @method addCar
	* @param newCar a Car to add
	* @param base64Image car avatar
	* @return {Promise<Car>} Added Car as a Promise
	*/
	addCar(newCar: any, base64Image: string): Promise<Car> {
		newCar.base64Image = base64Image;

		return this.http
			.post(this.carsUrl, JSON.stringify(newCar), {headers: this.headers})
			.toPromise()
			.then(response => {
				this.carsCache.dirty = true;
				return response.json().data as Car
			})
			.catch(this.handleError);
	}

	/**
	* This method accepts a Car parameter and base64 encoded image
	* and uses http to PUT a Car object to update the server-side database.
	* It returns server response as a Promise, or rejects as an error message
	* or an error object if error message doesn't exist
	*
	* @method updateCar
	* @param updatedCar Car object to update
	* @param base64Image car avatar
	* @return {Promise} Server response
	*/
	updateCar(updatedCar: any, base64Image: string): Promise<any> {
		updatedCar.base64Image = base64Image;
	  
	  return this.http
	    .put(this.carsUrl, JSON.stringify(updatedCar), {headers: this.headers})
	    .toPromise()
	    .then(response => {
	    	this.carsCache.dirty = true;
	    	return response;
	    })
	    .catch(this.handleError);
	}

	/**
	* This method accepts a parameter of number type and uses http to DELETE Car 
	* of this id from the server-side database. It returns a Promise resolved
	* as server response object, or rejected as an error message or
	* an error object if error message doesn't exist
	*
	* @method deleteCar
	* @param carId Car.id of the Car object to delete
	* @return {Promise<any>} Server response as a promise
	*/
	deleteCar(id: string): Promise<any> {
		const url = `${this.carsUrl}/${id}`;

		return this.http
			.delete(url)
			.toPromise()
			.then(response => {
	    	this.carsCache.dirty = true;
	    	return response;
	    })
			.catch(this.handleError);
	}

	/**
	* This method accepts car id as a parameter and uses http
	* to GET all the Fillups for a Car. It returns a Promise
	* resolved as an array of FillUps,
	* or rejected as an error message or an error object
	* if error message doesn't exist
	*
	* @method getFillUps
	* @return {Promise<FillUp[]>}
	*/
	getFillUps(carId: string): Promise<FillUp[]> {
		if (this.fillUpsCache[carId] && !this.fillUpsCache[carId].dirty) {
		 	return Promise.resolve(this.fillUpsCache[carId].data);
		}
		else 
		  return this.http.get(this.fillUpsUrl + '/' + carId)
	 	             .toPromise()
	 	             .then(response => {
	 	             		this.fillUpsCache[carId] = {};
	 	             		this.fillUpsCache[carId].data = response.json().data as FillUp[];
	 	             		this.fillUpsCache[carId].dirty = false;
	 	             		return response.json().data as FillUp[];
	 	             	})
	 	             .catch(this.handleError);
	}
  /**
	* This method accepts two parameters, an id for a Fill Up,
	* and an id for a car. It uses http GET to fetch the corresponding
	* Fillup for a Car.
	* It returns a Promise resolved as a FillUp object,
	* or rejected as an error message or an error object
	* if error message doesn't exist
	*
	* @method getFillUpById
	* @param carId id of a Car to which a fill up belongs to
	* @param id id of a fill up
	* @return {Promise<FillUp>} The FillUp for a Car as a Promise
	*/
	getFillUpById(carId: string, id: string): Promise<FillUp> {
		if (this.fillUpsCache[carId] && !this.fillUpsCache[carId].dirty) {
 			let fillUps = this.fillUpsCache[carId].data;
     		for (let fillUp of fillUps) {
     			if (fillUp.id === id)
     				return Promise.resolve(fillUp);
     		}
     		return Promise.resolve(null);
 		}
 		else
			return this.http.get(this.fillUpsUrl + '/one/' + id)
	 	             .toPromise()
	 	             .then(response => {
	 	             		return response.json().data as FillUp;
	 	             	})
	 	             .catch(this.handleError);
	}
  /**
	* This method accepts no parameters and returns an object containing
	* arrays of all fill ups for all the cars. Object keys are car ids, and
	* values are arrays of Fill Ups. Method returns a Promise 
	* which on error is rejected as an error message or an error object
	* if error message doesn't exist
	*
	* @method getAllFillUps
	* @return {Promise<Object>}
	*/
	getAllFillUps(): Promise<Object> {
		let allFillUps: Object = {};

		return this.getCars().then(cars => {
			let promises: Promise<Object>[] = [];
			for (let car of cars) {
				promises.push(this.getFillUps(car.id));
			}
			return Promise.all(promises).then(fillUps => {
				for (let i = 0; i < fillUps.length; ++i) {
					allFillUps[cars[i].id] = fillUps[i];
				}
				return allFillUps;
			}, err => {
				this.handleError(err);
			});
		})
		.catch(this.handleError);
	}
	/**
	* This method accepts a car id and a FillUp object as a parameter and uses
	* http POST to add a fill up to a Car. It returns a Promise resolved
	* to a FillUp object, or rejected as an error message or an error object
	* if error message doesn't exist
	*
	* @method addFillUp
	* @param carId Id of the car to which the new fill up is to be added
	* @param newFillUp The Fillup to be added
	* @return {Promise<FillUp>} The FillUp added as a Promise
	*/
	addFillUp(carId: string, newFillUp: FillUp): Promise<FillUp> {
		return this.http
			.post(this.fillUpsUrl + '/' + carId, JSON.stringify(newFillUp), {headers: this.headers})
			.toPromise()
			.then(response => {
				this.fillUpsCache[carId].dirty = true;
				return response.json().data as FillUp;
			})
			.catch(this.handleError);
	}
	/**
	* This method accepts car Id and a FillUp object as parameters
	* and uses http to PUT updated FillUp to the database.
	* It returns server response as a Promise on success,
	* or rejected as an error message or an error object
	* if error message doesn't exist
	*
	* @method updateFillUp
	* @param updatedFillUp The Fillup to be updated
	* @return {Promise<any>} The server response, as a Promise
	*/
	updateFillUp(carId: string, updatedFillUp: FillUp): Promise<any> {
		return this.http
						.put(`${this.fillUpsUrl}`, JSON.stringify(updatedFillUp), {headers: this.headers})
						.toPromise()
						.then(response => {
							this.fillUpsCache[carId].dirty = true;
							return response;
						})
						.catch(this.handleError);
	}
	/**
	* This method accepts car.id and FillUp.id as parameters and deletes the corresponding
	* entry in the database using http DELETE. It returns server response as a Promise
	* on success, and rejects with an error message or an error object
	* if error message doesn't exist
	*
	* @method deleteFillUp
	* @param carId id of the car to which fill up belongs to
	* @param fillUpId	id of the FillUp to be deleted
	* @return {Promise<FillUp>}	The deleted FillUp
	*/
	deleteFillUp(carId: string, fillUpId: string): Promise<any> {
		return this.http
						.delete(`${this.fillUpsUrl}/${carId}/${fillUpId}`)
						.toPromise()
						.then(response => {
							this.fillUpsCache[carId].dirty = true;
							return response;
						})
						.catch(this.handleError);
	}
	/**
	* This method accepts car id as a parameter and returns all reminders
	* of a car by issuing a http GET request. It returns an array
	* of Reminder objects as a Promise. On error it rejects
	* with an error message, or an error object if error message doesn't exist
	*
	* @method getReminders
	* @return {Promise<Reminder[]>}	All the reminders of a car as a Promise
	*/
	getReminders(carId: string): Promise<Reminder[]> {
		if (this.remindersCache[carId] && !this.remindersCache[carId].dirty) {
		 	return Promise.resolve(this.remindersCache[carId].data);
		}
		return this.http.get(this.remindersUrl + '/' + carId)
									.toPromise()
									.then(response => {
	 	             		this.remindersCache[carId] = {};
	 	             		this.remindersCache[carId].data = response.json().data as Reminder[];
	 	             		this.remindersCache[carId].dirty = false;
	 	             		return response.json().data as Reminder[];
	 	             	})
									.catch(this.handleError);
	}
	/**
	* This method accepts two parameters, an id for a Reminder,
	* and an id for a car. It uses http GET to fetch the corresponding
	* Reminder for a Car.
	* It returns a Promise resolved as a Reminder object,
	* or rejected as an error message or an error object
	* if error message doesn't exist
	*
	* @method getReminderById
	* @return {Promise<Reminder>} The Reminder for a Car as a Promise
	*/
	getReminderById(carId: string, id: string): Promise<Reminder> {
		if (this.remindersCache[carId] && !this.remindersCache[carId].dirty) {
 			let reminders = this.remindersCache[carId].data;
     		for (let reminder of reminders) {
     			if (reminder.id === id)
     				return Promise.resolve(reminder);
     		}
     		return Promise.resolve(null);
 		}
 		else
			return this.http.get(this.remindersUrl + '/one/' + id)
	 	             .toPromise()
	 	             .then(response => {
	 	             		return response.json().data as Reminder;
	 	             	})
	 	             .catch(this.handleError);
	}
	/**
	* This method accepts no parameters and returns an object containing
	* arrays of all reminders for all the cars. Object keys are car ids, and
	* values are arrays of Reminders. Method returns a Promise 
	* which on error is rejected as an error message or an error object
	* if error message doesn't exist
	*
	* @method getAllReminders
	* @return {Promise<Object>}
	*/
	getAllReminders(): Promise<Object> {
		let allReminders: Object = {};

		return this.getCars().then(cars => {
			let promises: Promise<Object>[] = [];
			for (let car of cars) {
				promises.push(this.getReminders(car.id));
			}
			return Promise.all(promises).then(reminders => {
				for (let i = 0; i < reminders.length; ++i) {
					allReminders[cars[i].id] = reminders[i];
				}
				return allReminders;
			}, err => {
				this.handleError(err);
			});
		})
		.catch(this.handleError);
	}
	/**
	* This method accepts a parameter of Reminder type and calls http to POST this new Reminder
	* to a database. It returns a Promise resolved as the added Reminder on success, and on
	* error it returns error message or an error object if error message doesn't exist
	*
	* @method addReminder
	* @param newReminder Reminder to be added
	* @return Promise<Reminder> The added Reminder
	*/
	addReminder(carId: string, newReminder: Reminder): Promise<Reminder> {
		return this.http
			.post(this.remindersUrl + '/' + carId, JSON.stringify(newReminder), {headers: this.headers})
			.toPromise()
			.then(response => {
				this.remindersCache[carId].dirty = true;
				return response.json().data as Reminder;
			})
			.catch(this.handleError);
	}
	/**
	* This method accepts car Id and a Reminder object as parameters
	* and uses http to PUT updated Reminder to the database.
	* It returns server response as a Promise on success,
	* or rejected as an error message or an error object
	* if error message doesn't exist
	*
	* @method updateReminder
	* @param updatedReminder The Reminder to be updated
	* @return {Promise<any>} The server response, as a Promise
	*/
	updateReminder(carId: string, updatedReminder: Reminder): Promise<any> {
		return this.http
						.put(`${this.remindersUrl}`, JSON.stringify(updatedReminder), {headers: this.headers})
						.toPromise()
						.then(response => {
							this.remindersCache[carId].dirty = true;
							return response;
						})
						.catch(this.handleError);
	}
	/**
	* This method accepts Reminder.id as a parameter and deletes the corresponding entry
	* in the database using http DELETE. It returns server response as a Promise 
	* on success, and rejects with an error message or an error object
	* if error message doesn't exist
	*
	* @method deleteReminder
	* @param reminderId	id of the Reminder to be deleted
	* @return {Promise<Reminder>}	The deleted Reminder
	*/
	deleteReminder(carId: string, reminderId: string): Promise<any> {
		return this.http
						.delete(`${this.remindersUrl}/${carId}/${reminderId}`)
						.toPromise()
						.then(response => {
							this.remindersCache[carId].dirty = true;
							return response;
						})
						.catch(this.handleError);
	}



	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for dev purposes only; TODO: delete for prod
    return Promise.reject(error.message || error.statusText || error);
  }
}
