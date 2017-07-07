/***********************************************************************************/
import { Component, OnInit } from '@angular/core';

// The class which handles AJAX data services
import { DataService } from '../../common/data.service';

import { Car } from '../../common/car';
import { FillUp } from '../../common/fillUp';
/***********************************************************************************/

/**
 * This component displays all the cars by iterating
 * cars array and sending each car to car component
 * for display
 *
 * @class CarsComponent
 */
@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.css']
})
export class CarCardsComponent implements OnInit {
	cars: Car[];
	fillUps: FillUp[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  	Promise.all([this.dataService.getCars(), this.dataService.getFillUps()])
  	.then((data) => {
  		this.cars = data[0];
  		this.fillUps = data[1];
  	});
  }

}
