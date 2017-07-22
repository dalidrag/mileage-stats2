import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Car } from '../common/car';

import { DataService } from '../common/data.service';
import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';
import { UtilitiesService } from '../common/utilities.service';
/***********************************************************************************/

/**
 * Fetches cars data for car cards
 *
 * @class CarsDataResolve
 */
@Injectable()
export class CarsDataResolve implements Resolve<Car[]> {
	constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Car[]> {
    return this.dataService.getCars().then(cars => {
      if (cars) {
        return cars;
      } else { // an error
        this.notificationHubService.emit(HubNotificationType.Error, 'Error while fetching cars!');
        this.router.navigate(['/dashboard']);
        return null;
      }
    })
    .catch(error => this.utilitiesService.handleError(error));
  }
}
