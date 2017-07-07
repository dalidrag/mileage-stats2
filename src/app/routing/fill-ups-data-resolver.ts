import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { FillUp } from '../common/fillUp';
import { DataService } from '../common/data.service';

/**
 * Fetches fill ups data for a car
 *
 * @class FillUpsDataResolve
 */
@Injectable()
export class FillUpsDataResolve implements Resolve<FillUp[]> {
	constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<FillUp[]> {
    return this.dataService.getFillUps().then(fillUps => {
      if (fillUps) {
        return fillUps;
      } else { // an error
        console.log('Error while fetching fillUps!');
        return null;
      }
    })
    .catch((error) => {
      console.log(error); // TODO: delete for production
    });
  }
}