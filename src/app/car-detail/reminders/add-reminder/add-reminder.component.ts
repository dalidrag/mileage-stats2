/***********************************************************************************/
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

import { Reminder } from '../../../common/reminder';

import { DataService } from '../../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../../common/notification-hub.service';
import { UtilitiesService } from '../../../common/utilities.service';

import { ReminderActionCreators } from '../../../redux-action-creators/reminder.action-creators';
/***********************************************************************************/

/**
 * Controls the form for adding a reminder
 *
 * @class AddReminderComponent
 */

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.css']
})
export class AddReminderComponent implements OnInit {
	addReminderForm: FormGroup;

  constructor(@Inject('AppStore') private appStore, public actionCreators: ReminderActionCreators, private fb: FormBuilder, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
  	this.addReminderForm = this.fb.group({  
  	      'text': ['', Validators.compose([Validators.required, Validators.maxLength(20)])], 'date': ['', Validators.required]
  	    });
    this.notificationHubService.emit(HubNotificationType.AppState, 'Adding a new reminder');
  }

 /**
  * Writes the collected reminder form values into the database
  *
  * @method onSubmit
  * @param formValues
  */
  onSubmit(formValues: any): void {  
  	let newReminder = new Reminder;
  	newReminder.text = formValues.text.trim();
  	newReminder.date = formValues.date.toString();

  	this.dataService.addReminder(newReminder).then((addedReminder: Reminder) => {
  		this.notificationHubService.emit(HubNotificationType.Success, 'Reminder Added');
      this.router.navigate(['../'], { relativeTo: this.route }); // Go up to parent route
      this.actionCreators.addReminder(this.appStore.getState().reminders.reminders, addedReminder);
      this.actionCreators.selectReminder(addedReminder);
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
	 * Listens for escape key pressed to quit the component
	 *
	 * @method onKey
	 * @param event:any
	 */
	 onKey(event:any): void { // without type info
	   if (event.key === 'Escape') {  // escape key was pressed
	 		 this.cancel();    
	   } 
	 }
	 /**
	 * Quits the component by routing away
	 *
	 * @method cancel
	 */
	 cancel() {
			// Simply navigate back to reminders view
	    this.router.navigate(['../'], { relativeTo: this.route }); // Go up to parent route	 	
	 }
}

