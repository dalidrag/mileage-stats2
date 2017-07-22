/***********************************************************************************/
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { User } from '../common/user';
import { DataService } from '../common/data.service';

import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';
import { UtilitiesService } from '../common/utilities.service';
/***********************************************************************************/


@Injectable()
export class UserDataResolve implements Resolve<User> {
	constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router) {}

  // gets data for the user
  resolve(route: ActivatedRouteSnapshot): Promise<User> {
    return this.dataService.getUser().then(user => {
      if (user) {
        return user;
      } else { // an error
        this.notificationHubService.emit(HubNotificationType.Error, 'Error while fetching user data!');
        this.router.navigate(['/dahsboard']);
        return null;
      }
    })
    .catch(error => this.utilitiesService.handleError(error));
  }
}
