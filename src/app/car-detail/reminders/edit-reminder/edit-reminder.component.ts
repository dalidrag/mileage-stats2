/***********************************************************************************/
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

import { Reminder } from '../../../common/reminder';

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

  unsubscribe;

  constructor(@Inject('AppStore') private appStore, public actionCreators: ReminderActionCreators, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dataService: DataService) {}
  
  ngOnInit() {
  	this.unsubscribe = this.route.data  /* get a reminder data from the resolver service */
    .subscribe((data: { reminder: Reminder }) => {
      this.reminder = data.reminder;

      this.editReminderForm = this.fb.group({  
    	      'text': [this.reminder.text, Validators.compose([Validators.required, Validators.maxLength(20)])],
            'date': [this.reminder.date, Validators.required]
    	    });
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
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

  	this.dataService.updateReminder(editedReminder).then(() => {
  		this.notificationHubService.emit(HubNotificationType.Success, 'Reminder Changed');
      this.router.navigate(['../../'], { relativeTo: this.route }); // Go up to parent route and append
      this.actionCreators.editReminder(this.appStore.getState().reminders.reminders, editedReminder);
      this.actionCreators.selectReminder(editedReminder);
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
       // Simply navigate back to reminders view
       this.router.navigate(['../../'], { relativeTo: this.route }); // Go up to parent route
     } 
   }
}
