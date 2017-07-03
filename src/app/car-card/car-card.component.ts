import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service'

/**
 * This component shows a car card, which displays car name and model, car avatar, 
 * three navigational buttons and three fields with basic statistics
 *
 * @class CarComponent
 */
@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
  providers: [DataService]
})
export class CarCardComponent implements OnInit {
	carName: string;
	carModel: string;
	milesPerGallon  = 20;
	costPerMile = 18;
	costPerMonth = 215;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  	this.dataService.getCars().then((cars)=>{
  		this.carName = cars[0].name;
  		this.carModel = cars[0].model;
  	});
  }

}
