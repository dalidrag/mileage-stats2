import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { FillUp } from './fillUp';

import { NotificationHubService, HubNotificationType } from './notification-hub.service';



/**
 * Contains common utilities services such as handling errors
 * and different calculations used on several places in the app
 *
 * @class UtilitiesService
 */
@Injectable()
export class UtilitiesService {
  public avatarURLFragment: string;

  constructor(private notificationHubService: NotificationHubService, private router: Router) {}

  /**
   * Handles all data rw errors within the application
   *
   * @method handleError
   * @param error
   */
  handleError(error): void {
		let message = error.message || error.statusText || 'unknown error';

		this.notificationHubService.emit(HubNotificationType.UnknownError, 'Error: ' + message);

		this.router.navigate(['/dashboard']);
	}

  /** 
  * This method calculates Miles Per Gallon for a car based on its fill ups data 
  *
  * @method CalculateMPG
  * @param fillUps FillUps[] array
  * @return {number} Miles per gallon for this car
  */
  CalculateMPG(fillUps: FillUp[]): number {
    if (!fillUps || fillUps.length === 0) return 0;

    let milesTravelled:number = fillUps[fillUps.length-1].odometer - fillUps[0].odometer;
    let spentFuel:number = fillUps.map(fillUp => fillUp.quantity)
                                  .reduce((accumulator, currentValue) => {
                                      return accumulator + currentValue;
                                  });
    return milesTravelled/spentFuel;
  }
  /** 
  * This method calculates Dollars Per Mile for a car based on its fill ups data 
  *
  * @method CalculateDPM
  * @param fillUps FillUps[] array
  * @return {number} Dollars per mile for this car
  */
  CalculateDPM(fillUps: FillUp[]): number {
    if (!fillUps || fillUps.length === 0) return 0;

    let milesTravelled:number = fillUps[fillUps.length-1].odometer - fillUps[0].odometer;
    let spentDollars:number = fillUps.map(fillUp => fillUp.pricePerGalon * fillUp.quantity)
                                  .reduce((accumulator, currentValue) => {
                                      return accumulator + currentValue;
                                  });
    if (milesTravelled > 0)
      return spentDollars/milesTravelled
    else
      return 0;
  }
  /** 
  * This method calculates Dollars Per Month for a car based on its fill ups data 
  *
  * @method CalculateDPMonth
  * @param fillUps FillUps[] array
  * @return {number} Dollars per month for this car
  */
  CalculateDPMonth(fillUps: FillUp[]): number {
    if (!fillUps || fillUps.length === 0) return 0;

    let spentDollars:number = fillUps.map(fillUp => fillUp.pricePerGalon * fillUp.quantity)
                                  .reduce((accumulator, currentValue) => {
                                      return accumulator + currentValue;
                                  });
    let intervalInMonths = this.monthDiff(fillUps[0].date, fillUps[fillUps.length - 1].date);

    if (intervalInMonths > 0)
      return spentDollars/intervalInMonths
    else
      return 0;
  }
  /** 
  * This method calculates difference in months between the two dates
  * First and last month are not counted if partial
  *
  * @method monthDiff
  * @param sD1 Beginning date string
  * @param sD2 Ending date string
  * @return {number} Number of months between the given two dates
  */
  monthDiff(sD1: string, sD2: string): number{
    let months;

    let d1 = new Date(Date.parse(sD1));
    let d2 = new Date(Date.parse(sD2));

    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();

    return months <= 0 ? 0 : months;
  }
}
