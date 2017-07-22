/***********************************************************************************/
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, Params } from '@angular/router';

import { Reminder } from '../common/reminder';

import { DataService } from '../common/data.service';
import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';
import { UtilitiesService } from '../common/utilities.service';
/***********************************************************************************/

@Injectable()
export class ReminderDataResolve implements Resolve<Reminder> {
  constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router) {}

  // gets data for a reminder reading the reminder id from the route
  resolve(route: ActivatedRouteSnapshot): Promise<Reminder> {
    return this.dataService.getReminderById(route.pathFromRoot[2].params['carId'], route.params['id']).then(reminder => {
      if (reminder) {
        return reminder;
      } else { // an error
        this.notificationHubService.emit(HubNotificationType.Error, 'Error while fetching reminders!');
        this.router.navigate(['/dashboard']);
        return null;
      }
    })
    .catch(error => this.utilitiesService.handleError(error));
  }
}
