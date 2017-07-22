/***********************************************************************************/
import { Component, OnInit, OnDestroy, HostBinding, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

import { DataService } from '../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../common/notification-hub.service';
import { UtilitiesService } from '../../common/utilities.service';

import { UserActionCreators } from '../../redux-action-creators/user.action-creators';

import { slideFromLeftToRightAnimation } from '../../common/componentAnimations';

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
 animations: [ slideFromLeftToRightAnimation ]
})
export class ProfileComponent implements OnInit, OnDestroy {
	user: User;
	editUserForm: FormGroup;
	unsubscribe;
  unsubscribeStore;
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.top')  top = '0px';

  constructor(@Inject('AppStore') private appStore,
              private fb: FormBuilder, private dataService: DataService,
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

    // Listens for escape key pressed to quit the component
    //subscribe to Redux store state changes
    this.unsubscribeStore = this.appStore.subscribe(() => {
      let state = this.appStore.getState();
      if (state.system.escKeyPressed)
        this.cancel();
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
    this.unsubscribeStore();
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
   * Quits the component by routing away
   *
   * @method cancel
   */
   cancel() {
      // Simply navigate back to reminders view
      this.router.navigate(['dashboard']); // Go up to parent route     
   }
}
