/***********************************************************************************/
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Reminder } from '../common/reminder';

import { DataService } from '../common/data.service';
import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';
import { UtilitiesService } from '../common/utilities.service';
/***********************************************************************************/


@Injectable()
export class RemindersDataResolve implements Resolve<Reminder[]> {
	constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router) {}

  // gets reminders data
  resolve(route: ActivatedRouteSnapshot): Promise<Reminder[]> {
    return this.dataService.getReminders(route.pathFromRoot[2].params['carId']).then(reminders => {
      if (reminders) {
        return reminders;
      } else { // an error
        this.notificationHubService.emit(HubNotificationType.Error, 'Error while fetching reminders!');
        this.router.navigate(['/dashboard']);
        return null;
      }
    })
    .catch(error => this.utilitiesService.handleError(error));
  }
}
