/***********************************************************************************/
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { DataService } from '../common/data.service';

import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';
import { UtilitiesService } from '../common/utilities.service';
/***********************************************************************************/


@Injectable()
export class AllRemindersDataResolve implements Resolve<Object> {
	constructor(private utilitiesService: UtilitiesService, private dataService: DataService, private notificationHubService: NotificationHubService, private router: Router) {}

  // gets data for cars
  resolve(route: ActivatedRouteSnapshot): Promise<Object> {
    return this.dataService.getAllReminders().then(reminders => {
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
