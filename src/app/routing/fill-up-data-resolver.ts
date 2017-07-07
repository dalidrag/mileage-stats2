import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Params } from '@angular/router';

import { FillUp } from '../common/fillUp';
import { DataService } from '../common/data.service';

@Injectable()
export class FillUpDataResolve implements Resolve<FillUp> {
	constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<FillUp> {
    return this.dataService.getFillUpById(route.params['id']).then(fillUp => {
      if (fillUp) {
        return fillUp;
      } else { // an error
        // do something, like this.router.navigate(...);
        console.log('Error while fetching a fillUp of id: ' + route.params['id']);
        return null;
      }
    })
    .catch((error) => {
      console.log(error); // TODO: delete for production
    });
  }
}