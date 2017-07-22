import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { DataService } from './data.service';

/**
 * Performs actual authentication operations used by auth module and elsewhere
 *
 * @class AuthService
 */
@Injectable()
export class AuthService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private authUrl = 'http://localhost:3000/api/';
	public loggedIn: boolean = false;

  constructor(private http: Http, private dataService: DataService) { }

  /**
   * Tries to log in a user
   *
   * @method logIn
   * @param username
   * @return {Promise<boolean>} Will resolve to true if log in succeeded
   */
  logIn(username: string): Promise<boolean> {
		return this.http
			.post(this.authUrl + 'login', JSON.stringify({username: username}), {headers: this.headers})
      .toPromise()		// Because Angular http service returns observable
	    .then(response => {
	    	if (response._body === "true") {
	    		this.loggedIn = true;
	    		return true;
	    	}
	    	else
	    		return false;
	    })																									
			.catch(this.handleError);	// a single method deals with error in this class
  }
  /**
   * Tells whether a user is logged in
   *
   * @method isLoggedIn
   * @return {Promise<boolean>} Will resolve to true if user is logged in
   */
  isLoggedIn(): Promise<boolean> {
  	return this.http.get(this.authUrl + 'loggedIn')
  						.toPromise()
  						.then(response => {
  							if (response._body === "true") {
                  this.loggedIn = true;
                  return true;
                }
  							else {
                  this.loggedIn = false;
                  return false;
                } 
  						})
  						.catch(this.handleError);
  }
  /**
   * Checks whether a user name exists in the back-end database
   *
   * @method nameExists
   * @param name
   * @return {Observable<boolean>}
   */
  nameExists(name: string): Observable<boolean> {
  	return this.http
  					.post(this.authUrl + 'userExists',  JSON.stringify({username: name}), {headers: this.headers})
  					.map(response => {
  						if (response._body === "true") {
  							return true;
  						}
  						else return false;
  					})
  					.catch(this.handleError);
  }
  /**
   * Tries to register a new user
   *
   * @method signUp
   * @param username
   * @return {Promise<boolean>} Will resolve to true if sign up succeeded
   */
  signUp(username: string): Promise<boolean> {
  	return this.http
  		.post(this.authUrl + 'signUp', JSON.stringify({username: username}), {headers: this.headers})
  		.toPromise()
  		.then(response => {
  			if (response._body === "false") // if no errors
  				return !this.logIn(username);	// logIn returns true on success, where we need true on errors
  			else
  				return Promise.resolve(response._body);
  		})
  		.then(response => {
  			return response;
  		})
  		.catch(this.handleError);
  }
  /**
   * Tries to log out a user
   *
   * @method logout
   * @return {Promise<boolean>} Will resolve to true if log out succeeded
   */
  logout(): Promise<boolean> {
    return this.http.get(this.authUrl + 'logout')
            .toPromise()
            .then(response => {
              if (response._body === 'ok') {
                  this.loggedIn = false;
                  this.dataService.clearCache();
                  return true;
              }
               else return false;
            })
            .catch(this.handleError);
  }

	private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error.statusText || error);
  }
}
