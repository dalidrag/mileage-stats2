/***********************************************************************************/
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

import { Reminder } from '../../../common/reminder';
import { Car } from '../../../common/car';

import { DataService } from '../../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../../common/notification-hub.service';
import { UtilitiesService } from '../../../common/utilities.service';

import { ReminderActionCreators } from '../../../redux-action-creators/reminder.action-creators';
/***********************************************************************************/

/**
 * Controls the form for editing a reminder
 *
 * @class EditReminderComponent
 */

@Component({
  selector: 'app-edit-reminder',
  templateUrl: './edit-reminder.component.html',
  styleUrls: ['./edit-reminder.component.css']
})
export class EditReminderComponent implements OnInit , OnDestroy {
  reminder: Reminder;
	editReminderForm: FormGroup;
  carId: string;

  unsubscribe;
  unsubscribeStore;

  constructor(@Inject('AppStore') private appStore, public actionCreators: ReminderActionCreators, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dataService: DataService) {}
  
  ngOnInit() {
  	this.unsubscribe = this.route.data  /* get a reminder data from the resolver service */
    .subscribe((data: { reminder: Reminder, car: Car }) => {
      this.reminder = data.reminder;
      this.carId = data.car.id;

      this.editReminderForm = this.fb.group({  
    	      'text': [this.reminder.text, Validators.compose([Validators.required, Validators.maxLength(20)])],
            'date': [this.reminder.date, Validators.required]
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
  * Writes the collected edit reminder form values
  * into the database
  *
  * @method onSubmit
  * @param formValues
  */
  onSubmit(formValues: any): void {  
    let editedReminder = new Reminder;
  	editedReminder.text = formValues.text.trim();
  	editedReminder.date = formValues.date.toString();
    editedReminder.id = this.reminder.id;

  	this.dataService.updateReminder(this.carId, editedReminder).then(() => {
  		this.notificationHubService.emit(HubNotificationType.Success, 'Reminder updated');
      this.router.navigate(['../../'], { relativeTo: this.route }); // Go up to parent route and append
      this.actionCreators.editReminder(this.appStore.getState().reminders.reminders, editedReminder);
      this.actionCreators.selectReminder(editedReminder);
  	})
    .catch(error => this.utilitiesService.handleError(error));
  }
  
  /**
   * Quits the component by routing away
   *
   * @method cancel
   */
   cancel(): void { 
       // Simply navigate back to reminders view
       this.router.navigate(['../../'], { relativeTo: this.route }); // Go up to parent route
   }
}
