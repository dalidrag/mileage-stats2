/***********************************************************************************/
import { Component, Input, OnChanges, OnInit, OnDestroy, SimpleChanges, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';

import { DataService} from '../../../common/data.service';

import { Reminder } from '../../../common/reminder';
import { Car } from '../../../common/car';

import { ReminderActionCreators } from '../../../redux-action-creators/reminder.action-creators';

import { NotificationHubService, HubNotificationType } from '../../../common/notification-hub.service';
import { UtilitiesService } from '../../../common/utilities.service';
/***********************************************************************************/

/**
 * Shows a list of all reminder by using RemindersListEntry component for individual reminders
 * It also handles add reminder click and deletion of the selected reminder
 *
 * @class RemindersListComponent
 */
@Component({
  selector: 'app-reminders-list',
  templateUrl: './reminders-list.component.html',
  styleUrls: ['./reminders-list.component.css']
})
export class RemindersListComponent implements OnInit, OnChanges, OnDestroy {
	@Input()
	reminders: Reminder[]
	@Input()
	car: Car;
	selectedReminder: Reminder;
	unsubscribe;

	constructor(private actionCreators: ReminderActionCreators, @Inject('AppStore') private appStore, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router, private route: ActivatedRoute, private dataService: DataService) {}

	ngOnInit() {
		this.unsubscribe = this.appStore.subscribe(() => {
			let state = this.appStore.getState();
			this.selectedReminder = state.reminders.selectedReminder;
 	  });
	}

	ngOnDestroy() {
		this.unsubscribe();
	}

	onSelect(reminder: Reminder): void {
		this.actionCreators.selectReminder(reminder);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.reminders) {
	    this.reminders = changes.reminders.currentValue;
			// Now sort reminders by date
  		this.reminders.sort((reminder1, reminder2) => reminder1.date > reminder2.date ? 1 : -1);
		}
	}
/*	
	addReminderClicked(): void {
		this.router.navigate(['addReminder'], {relativeTo: this.route});
		this.actionCreators.deselectReminders();
	}
*/
 /**
	* Deletes the selected reminder
	*
	* @method deleteReminder
	
	deleteReminder(): void {
		this.dataService.deleteReminder(this.car.id, this.selectedReminder.id).then(()=>{
			this.notificationHubService.emit(HubNotificationType.Success, 'Reminder deleted');
		  this.router.navigate(['./'], {relativeTo: this.route});
		  this.actionCreators.deleteReminder(this.appStore.getState().reminders.reminders, this.selectedReminder);
      this.actionCreators.deselectReminders();
		})
		.catch(error => this.utilitiesService.handleError(error));
	} */
}
