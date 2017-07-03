import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Car } from './car';
import { FillUp } from './fillUp';
import { Reminder } from './reminder';

/**
 * Provides exchange of data with a back-end database
 * via the HTTP server. Three collections are implemented:
 * cars, fillups and reminders, with CRUD methods for each.
 * A single method handles eventual errors.
 *
 * @class DataService
**/
@Injectable()
export class DataService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private carsUrl = 'api/cars';  // URL to web api
	private fillUpsUrl = 'api/fillUps';
	private remindersUrl = 'api/reminders';

  constructor(private http: Http) { }

  /**
    * This method accepts no operands and uses http to GET
    * all the cars of a user from the server. It returns a Promise resolved
    * as an array of Cars, or rejected as an error message or
    * an error object if error message doesn't exist
    *
    * @method getCars
    * @return {Promise<Car[]>} The array of Cars as a Promise
    */
  getCars(): Promise<Car[]> {
  	return this.http
  			.get(this.carsUrl)
  	    .toPromise()	// Because Angular http service returns observable
  	    .then(response => response.json().data as Car[]) // in memory
					// web api returns the data contained
					// in data object, for security reasons:
					//https://www.owasp.org/index.php/OWASP_AJAX_Security_Guidelines#Always_return_JSON_with_an_Object_on_the_outside
  			.catch(this.handleError);	// a single method deals with errors in this class
  	
	}
	
	/**
	  * @method getFillUps
    * @return {Promise<FillUp[]>} The array of FillUps as a Promise
    */
	getFillUps(): Promise<FillUp[]> {
		return this.http
				.get(this.fillUpsUrl)
		    .toPromise()
		    .then(response => response.json().data as FillUp[])
		    .catch(this.handleError);
	} 
	
	/**
	  * @method getReminders
    * @return {Promise<Reminder[]>} The array of Reminders as a Promise
    */
	getReminders(): Promise<Reminder[]> {
		return this.http
				.get(this.remindersUrl)
		    .toPromise()
		    .then(response => response.json().data as Reminder[])
		    .catch(this.handleError);
		} 
	
	/**
	* This method accepts an operand of Car type and uses http to POST new 
	* car to the server-side database. It returns a Promise resolved
	* as a Car object, or rejected as an error message or
	* an error object if error message doesn't exist
	*
	* @method addCar
	* @param newCar a Car to add
	* @return {Promise<Car>} Added car as a Promise
	*/
	addCar(newCar: Car): Promise<Car> {
		return this.http
				.post(this.carsUrl, JSON.stringify(newCar), {headers: this.headers})
				.toPromise()
				.then(() => newCar)
				.catch(this.handleError);
	}

 /**
	* @method addFillUp
	* @param newFillUp a FillUp to add
	* @return {Promise<FillUp>} Added fillUp as a Promise
	*/
	addFillUp(newFillUp: FillUp): Promise<FillUp> {
		return this.http
				.post(this.fillUpsUrl, JSON.stringify(newFillUp), {headers: this.headers})
				.toPromise()
				.then(() => newFillUp)
				.catch(this.handleError);
	}	

	/**
	* @method addReminder
	* @param newReminder a Reminder to add
	* @return {Promise<Reminder>} Added reminder as a Promise
	*/
	addReminder(newReminder: Reminder): Promise<Reminder> {
		return this.http
				.post(this.remindersUrl, JSON.stringify(newReminder), {headers: this.headers})
				.toPromise()
				.then(() => newReminder)
				.catch(this.handleError);
	}
  
	/**
	* This method accepts an operand of Car type and uses http to PUT car 
	* object to update the server-side database. It returns a Promise resolved
	* as a Car object, or rejected as an error message or
	* an error object if error message doesn't exist
	*
	* @method updateCar
	* @param updatedCar Car object to update
	* @return {Promise<Car>} Updated car as a Promise
	*/
	updateCar(updatedCar: Car): Promise<Car> {
		const url = `${this.carsUrl}/${updatedCar.id}`; // TODO:_id
		  
		return this.http
		  .put(url, JSON.stringify(updatedCar), {headers: this.headers})
		  .toPromise()
		  .then(() => updatedCar)
		  .catch(this.handleError);
	}

	/**
	* @method updateFillUp
	* @param updatedFillUp FillUp object to update
	* @return {Promise<FillUp>} Updated fillUp as a Promise
	*/
	updateFillUp(updatedFillUp: FillUp): Promise<FillUp> {
		const url = `${this.fillUpsUrl}/${updatedFillUp.id}`; // TODO:_id
		  
		return this.http
		  .put(url, JSON.stringify(updatedFillUp), {headers: this.headers})
		  .toPromise()
		  .then(() => updatedFillUp)
		  .catch(this.handleError);
	}

	/**
	* @method updateReminder
	* @param updatedReminder Reminder object to update
	* @return {Promise<Reminder>} Updated reminder as a Promise
	*/
	updateReminder(updatedReminder: Reminder): Promise<Reminder> {
		const url = `${this.remindersUrl}/${updatedReminder.id}`; // TODO:_id
		  
		return this.http
		  .put(url, JSON.stringify(updatedReminder), {headers: this.headers})
		  .toPromise()
		  .then(() => updatedReminder)
		  .catch(this.handleError);
	}
	
	/**
	* This method accepts an operand of string type and uses http to DELETE car 
	* of this id from the server-side database. It returns a Promise resolved
	* as a Car object, or rejected as an error message or
	* an error object if error message doesn't exist
	*
	* @method deleteCar
	* @param carId Car.id of the Car object to delete
	* @return {Promise}
	*/
	deleteCar(id: string): Promise<any> {
		const url = `${this.carsUrl}/${id}`;

		return this.http
			.delete(url)
			.toPromise()
			.then(() => id)
			.catch(this.handleError);
	}

	/**
	* @method deleteFillUp
	* @param fillUpId FillUp.id of the FillUp object to delete
	* @return {Promise}
	*/
	deleteFillUp(id: string): Promise<any> {
		const url = `${this.fillUpsUrl}/${id}`;

		return this.http
			.delete(url)
			.toPromise()
			.then(() => id)
			.catch(this.handleError);
	}

	/**
	* @method deleteFillUp
	* @param fillUpId FillUp.id of the FillUp object to delete
	* @return {Promise}
	*/
	deleteReminder(id: string): Promise<any> {
		const url = `${this.remindersUrl}/${id}`;

		return this.http
			.delete(url)
			.toPromise()
			.then(() => id)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
														 // TODO:delete for production
	  return Promise.reject(error.message || error);
	}
}
