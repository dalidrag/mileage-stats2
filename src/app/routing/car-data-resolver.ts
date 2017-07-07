/***********************************************************************************/
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, Params } from '@angular/router';

import { Car } from '../common/car';
import { DataService } from '../common/data.service';

import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';
import { UtilitiesService } from '../common/utilities.service';
/***********************************************************************************/

@Injectable()
export class CarDataResolve implements Resolve<Car> {
	constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private router: Router, private notificationHubService: NotificationHubService) {}

  // gets data for a car reading the car id from a route
  resolve(route: ActivatedRouteSnapshot): Promise<Car> {
    return this.dataService.getCarById(route.pathFromRoot[1].params['carId']).then(car => {
      if (car) {
        return car;
      } else { // an error
        this.notificationHubService.emit(HubNotificationType.Error, 'Error while fetching a car of id: ' + route.pathFromRoot[1].params['carId']);
        this.router.navigate(['/']);
        return null;
      }
    })
    .catch(error => this.utilitiesService.handleError(error));
  }
}
