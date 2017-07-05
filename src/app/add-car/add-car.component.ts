/***********************************************************************************/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { DataService } from '../data.service';

import { Car } from '../car';
/***********************************************************************************/

/**
 * Presents form for adding new car
 *
 * @class AddCarComponent
 */
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
	car: Car;
  static cars: Car[] = [{id: '0', model: '', name: '', year:''}];

  sub;

  carModelCtrl = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20)]));
  carNameCtrl = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20), AddCarComponent.carUnique]));
  carYearCtrl = new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(4), Validators.maxLength(4)]));
  addCarForm: FormGroup;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.car = new Car;

    this.addCarForm = new FormGroup({first: this.carModelCtrl, second: this.carNameCtrl, third: this.carYearCtrl});

    this.sub = this.route.data
    .subscribe((data: { cars: Car[] }) => {
      AddCarComponent.cars = data.cars;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  writeCarData(): void {
  	this.dataService.addCar(this.car).then(() => {
  		this.router.navigate(['dashboard']);
  	})
    .catch((error) => {
      console.error('An error occurred', error); // for dev purposes only; TODO: delete for prod
    })
  }

  static carUnique(control: FormControl): { [s: string]: boolean } {
    for (let i = 0; i < AddCarComponent.cars.length; ++i)
        if (control.value === AddCarComponent.cars[i].name)
          return {carNameNotUnique: true};
  }
}
