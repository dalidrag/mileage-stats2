import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, Params } from '@angular/router';

import { FillUp } from '../common/fillUp';

import { DataService } from '../common/data.service';
import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';
import { UtilitiesService } from '../common/utilities.service';
/***********************************************************************************/

@Injectable()
export class FillUpDataResolve implements Resolve<FillUp> {
	constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<FillUp> {
    return this.dataService.getFillUpById(route.pathFromRoot[2].params['carId'], route.params['id']).then(fillUp => {
      if (fillUp) {
        return fillUp;
      } else { // an error
        this.notificationHubService.emit(HubNotificationType.Error, 'Error while fetching a fillUp!');
        this.router.navigate(['/dashboard']);
        return null;
      }
    })
    .catch(error => this.utilitiesService.handleError(error));
  }
}