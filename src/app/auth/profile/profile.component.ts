/***********************************************************************************/
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

import { DataService } from '../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../common/notification-hub.service';
import { UtilitiesService } from '../../common/utilities.service';

import { UserActionCreators } from '../../redux-action-creators/user.action-creators';

// import { slideFromLeftToRightAnimation } from '../../common/componentAnimations';

import { User }  from '../../common/user';
/***********************************************************************************/

/**
 * Displays user profile form for viewing and changing
 * user profile data.
 *
 * @class ProfileComponent
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
//  animations: [ slideFromLeftToRightAnimation ]
})
export class ProfileComponent implements OnInit, OnDestroy {
	user: User;
	editUserForm: FormGroup;
	unsubscribe;
/*  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.top')  top = '0px'; */

  constructor(private fb: FormBuilder, private dataService: DataService,
  						public actionCreators: UserActionCreators, private router: Router,
  						private notificationHubService: NotificationHubService,
  						private utilitiesService: UtilitiesService, private route: ActivatedRoute)
  { }

  ngOnInit() {
		// Collect user data
    this.unsubscribe = this.route.data
    .subscribe((data: { user: User }) => {
      this.user = data.user;
      this.notificationHubService.emit(HubNotificationType.AppState, "User profile ('Esc' to cancel)");

      this.editUserForm = this.fb.group({  
    	      'username': [this.user.username], 'displayName': [this.user.displayName, Validators.maxLength(40)],
    				'country': [this.user.country, Validators.maxLength(50)], 'postalCode': [this.user.postalCode]
    	    });
    });

  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

  /**
   * This method sends edit user form values to the server
   *
   * @method onSubmit
   * @param formValues The collected form values
   */
   onSubmit(formValues: any): void {  
   	if (!this.editUserForm.valid) return;

    let editedUser = new User;
   	editedUser.username = formValues.username;
   	editedUser.displayName = formValues.displayName && formValues.displayName.trim();
   	editedUser.country = formValues.country && formValues.country.trim();
   	editedUser.postalCode = formValues.postalCode;

    if (editedUser.username && editedUser.displayName && editedUser.country && editedUser.postalCode)
      editedUser.registrationCompleted = true;
   	
   	this.dataService.updateUser(editedUser).then(() => {
   		this.notificationHubService.emit(HubNotificationType.Success, 'User data saved');
   		this.actionCreators.editUser(editedUser);
      this.router.navigate(['/dashboard']);
  	 	})
	  	.catch(error => this.utilitiesService.handleError(error));
   }

  /**
   * Trims input fields on losing focus
   *
   * @method onBlur
   * @param event:any
   */
   onBlur(event: any) {
     event.target.value = event.target.value.trim();
   }
   /**
  * Listens for escape key to quit the component
  *
  * @method onKey
  * @param event:any
  */
  onKey(event:any): void { // without type info
    if (event.key === 'Escape') {  // escape key was pressed
      // Simply navigate back to dashboard view
      this.router.navigate(['/dashboard']);
    } 
  }
}
