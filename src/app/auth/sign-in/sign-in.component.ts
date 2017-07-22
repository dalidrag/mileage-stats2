import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../common/auth.service';

/**
 * Handles sign-in process by displaying and managing sign-in form
 *
 * @class SignInComponent
 */
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
	showError: boolean = false;
	private username: string;

  nameCtrl = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20)]));

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onInputChange(event: any): void {
  	this.showError = false;
  	this.username = event.target.value.trim();
  }

  /**
   * Listens for enter key pressed to submit user name
   *
   * @method onKey
   * @param event:any
   */
   onKey(event:any): void { // without type info
     if (event.key === 'Enter') {  // enter key was pressed
       this.onSignIn();  // Simply call onSignIn method
     } 
   }

  /**
   * Tries to sign-in user whose username is collected from the sign-in form
   *
   * @method onSignIn
   */ 
  onSignIn(): void {
  	if (!this.username) return;  // we are not interested in empty user-name

    this.auth.logIn(this.username).then(loggedIn => {
  		if (!loggedIn) this.showError = true;  // show that name is taken
  		else this.router.navigate(['/']);  // go to application
  	});
  }
}
