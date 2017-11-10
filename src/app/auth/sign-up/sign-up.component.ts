import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { AuthService } from '../../common/auth.service';

/**
 * Handles sign up by displaying and managing sign-up form
 *
 * @class SignUpComponent
 */
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
	public username: string;
  showError: any;
  private userNames: Subject<string> = new Subject<string>();
	usernameTaken: Observable<boolean> = new Observable<boolean>();

  nameCtrl = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20)]));

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  	this.usernameTaken = this.userNames
  	    .debounceTime(300)        // wait for 300ms pause in events
  	    .distinctUntilChanged()   // ignore if next search term is same as previous
  	    .switchMap(name =>    // switch to new observable each time
  	      // return the http search observable
  	      this.auth.nameExists(name)
  	    ) 
  }

  onInputChange(event: any): void {
  	this.showError = false;
  	this.username = event.target.value.trim();
  	this.search(this.username);
  }

	/**
   * Triggers the search if entered username exists on the server
   * Observables are used; the logic itself is contained in ngOnInit method
   *
   * @method search
   */
  search(name: string): void {
    // Push a search term into the observable stream
	  this.userNames.next(name);
	}

  /**
   * Listens for enter key pressed to submit user name
   *
   * @method onKey
   * @param event:any
   */
   onKey(event:any): void { // without type info
     if (event.key === 'Enter') {  // enter key was pressed
       this.onSignUp();  // Simply call onSignUp method
     } 
   }
  /**
   * Tries to create new user account collecting username from the sign-up form
   *
   * @method onSignUp
   */
  onSignUp(): void {
		this.showError = '';
  	if (!this.username) return;  // we are not interested in empty user-name

    this.auth.signUp(this.username).then(error => {
  		if (error) 
  			this.showError = error;  // show that sign up didn't succeed
  		else
  			this.router.navigate(['/dashboard']);  // go to application
  	});
  }

}
