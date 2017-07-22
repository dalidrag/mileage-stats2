/***********************************************************************************/
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../../common/notification-hub.service';
import { UtilitiesService } from '../../../common/utilities.service';

import { UserActionCreators } from '../../../redux-action-creators/user.action-creators';

import { User } from '../../../common/user';
/***********************************************************************************/


/**
 * This component displays the complete registration form
 *
 * @class CompleteRegistrationComponent
 */

@Component({
  selector: 'app-complete-registration',
  templateUrl: './complete-registration.component.html',
  styleUrls: ['./complete-registration.component.css']
})
export class CompleteRegistrationComponent implements OnInit {
	@Input()
	user: User;
	editUserForm: FormGroup;
		
  constructor(private fb: FormBuilder, private dataService: DataService,
  						public actionCreators: UserActionCreators, private notificationHubService: NotificationHubService,
  						private utilitiesService: UtilitiesService) { }

  ngOnInit() {
  	let group: any = {};

  	if (!this.user.displayName)
  		group.displayName = new FormControl('', Validators.maxLength(40));
  	if (!this.user.country)
  		group.country = new FormControl('');
  	if (!this.user.postalCode) 
  		group.postalCode = new FormControl('');
  	
  	this.editUserForm = this.fb.group(group);
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
   	editedUser.username = this.user.username;
   	editedUser.displayName = formValues.displayName && formValues.displayName.trim();
   	editedUser.country = formValues.country && formValues.country.trim();
   	editedUser.postalCode = formValues.postalCode;
   	editedUser.registrationCompleted = true;
   	
   	this.dataService.updateUser(editedUser).then(() => {
   			this.notificationHubService.emit(HubNotificationType.Success, 'User Data Saved');
   			this.actionCreators.editUser(editedUser);
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

}
