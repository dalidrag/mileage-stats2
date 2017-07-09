/***********************************************************************************/
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd }   from '@angular/router';

import { Reminder } from '../../common/reminder';
import { Car } from '../../common/car';

import { NotificationHubService, HubNotificationType } from '../../common/notification-hub.service';

import { ReminderActionCreators } from '../../redux-action-creators/reminder.action-creators';
/***********************************************************************************/

/**
 * A container component for reminders accordion sub-view
 * Fetches reminder data for all other reminder components
 *
 * @class RemindersComponent
 */
@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit, OnDestroy {
	reminders: Reminder[];
  car: Car;

	sub;
	unsubscribeRouterEvents;
	unsubscribeReduxStore;

  constructor(@Inject('AppStore') private appStore, public actionCreators: ReminderActionCreators, private route: ActivatedRoute, private router:Router, private notificationHubService: NotificationHubService) { }

  ngOnInit() {
    //subscribe listener to state changes
    this.unsubscribeReduxStore = this.appStore.subscribe(() => {
      let state = this.appStore.getState();
      this.reminders = state.reminders.reminders;
    });

    this.sub = this.route.data // Get reminders and car data from the resolver service
    .subscribe((data: { reminders: Reminder[], car: Car }) => {
      this.reminders = data.reminders;
      this.actionCreators.loadReminders(data.reminders);
      this.car = data.car;
    });

    // Listen to route changes to display notification message about app state
    this.unsubscribeRouterEvents = this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) { // if succesful navigation to reminders route happened
        if (this.route.children[0]) {  // check if there are subroutes
          if (this.route.children[0].snapshot.url[0].toString() === 'addReminder') {
            this.notificationHubService.emit(HubNotificationType.AppState, 'Adding a new reminder for ' + this.car.name);
          }
          else if (this.route.children[0].children[0] == undefined && this.route.children[0].snapshot.url.length === 1) { // if no further content after /reminders/<number>
            this.notificationHubService.emit(HubNotificationType.AppState, 'A reminder for ' + this.car.name);  // update app state write up
          }
          else {  // we are editing a reminder
            this.notificationHubService.emit(HubNotificationType.AppState, 'Editing a reminder for ' + this.car.name);  // update app state write up            
          }
        }  // finished with sub routes
        else  { // no subroutes, we are showing reminders list
          this.notificationHubService.emit(HubNotificationType.AppState, 'Reminders for ' + this.car.name);  // update app state write up
        }
      }  // Finished with all the routes
    });
    this.notificationHubService.emit(HubNotificationType.AppState, 'Showing reminders for ' + this.car.name);
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
    this.unsubscribeRouterEvents.unsubscribe();
    this.unsubscribeReduxStore();
  }

}
