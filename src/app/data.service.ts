import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Car } from './car';

/**
 * Provides exchange of data with a back-end database
 * via the HTTP server
 *
 * @class DataService
**/
@Injectable()
export class DataService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private carsUrl = 'api/cars';  // URL to web api

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
  	return this.http.get(this.carsUrl)
  	             .toPromise()	// Because Angular http service returns observable
  	             .then(response => response.json().data as Car[]) // in memory
												// web api returns the data contained
											// in data object, for security reasons:
			//https://www.owasp.org/index.php/OWASP_AJAX_Security_Guidelines#Always_return_JSON_with_an_Object_on_the_outside
  					.catch(this.handleError);	// a single method deals with errors in this class
  	
	} 
  
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
														 // TODO:delete for production
	  return Promise.reject(error.message || error);
	}
}
