import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { DataService } from '../data.service';
import { Car } from '../car';

@Injectable()
export class CarsDataResolve implements Resolve<Car[]> {
	constructor(private dataService: DataService) {}

resolve(route: ActivatedRouteSnapshot): Promise<Car[]> {
    return this.dataService.getCars().then(cars => {
      if (cars) {
        return cars;
      } else { // an error
        // do something, like this.router.navigate(['/dashboard']);
        return null;
      }
    })
    .catch((error) => {
      console.log(error); // TODO: delete for production
    });
  }
}
