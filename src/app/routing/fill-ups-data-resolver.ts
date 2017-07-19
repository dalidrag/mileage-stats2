import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { FillUp } from '../common/fillUp';

import { DataService } from '../common/data.service';
import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';
import { UtilitiesService } from '../common/utilities.service';
/***********************************************************************************/

/**
 * Fetches fill ups data for a car
 *
 * @class FillUpsDataResolve
 */
@Injectable()
export class FillUpsDataResolve implements Resolve<FillUp[]> {
	constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<FillUp[]> {
    return this.dataService.getFillUps(route.pathFromRoot[1].params['carId']).then(fillUps => {
      if (fillUps) {
        return fillUps;
      } else { // an error
        this.notificationHubService.emit(HubNotificationType.Error, 'Error while fetching fillUps!');
        this.router.navigate(['/']);
        return null;
      }
    })
    .catch(error => this.utilitiesService.handleError(error));
  }
}