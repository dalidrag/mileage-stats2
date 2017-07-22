/***********************************************************************************/
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { DataService } from '../common/data.service';

import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';
import { UtilitiesService } from '../common/utilities.service';
/***********************************************************************************/


@Injectable()
export class AllFillUpsDataResolve implements Resolve<Object> {
	constructor(private utilitiesService: UtilitiesService, private dataService: DataService, private notificationHubService: NotificationHubService, private router: Router) {}

  // gets data for cars
  resolve(route: ActivatedRouteSnapshot): Promise<Object> {
    return this.dataService.getAllFillUps().then(fillUps => {
      if (fillUps) {
        return fillUps;
      } else { // an error
        this.notificationHubService.emit(HubNotificationType.Error, 'Error while fetching fill ups!');
        this.router.navigate(['/dashboard']);
        return null;
      }
    })
    .catch(error => this.utilitiesService.handleError(error));
  }
}
