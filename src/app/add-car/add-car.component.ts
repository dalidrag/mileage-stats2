import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { DataService } from '../data.service';

import { Car } from '../car';

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

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  	this.car = new Car;
  }

  writeCarData(): void {
  	this.dataService.addCar(this.car).then(() => {
  		this.router.navigate(['dashboard']);
  	})
  }
}
