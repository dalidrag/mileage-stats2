import { Component, Input, OnInit } from '@angular/core';

import { UtilitiesService} from '../../../common/utilities.service';

/**
 * The Chrome of The Application
 *
 * @class AppComponent
 */
@Component({
  selector: 'app-summary-stat',
  templateUrl: './summary-stat.component.html',
  styleUrls: ['./summary-stat.component.css']
})
export class SummaryStatComponent implements OnInit {
	@Input()
	cars;
	@Input()
	fillUps;
	MPG: number = 0;
  CPM: number = 0;
  CPMonth: number = 0;

	constructor (private utilitiesService: UtilitiesService) { }

	ngOnInit() {
		let milesPerGallon = [];
		let costPerMile = [];
		let costPerMonth = [];

		if (this.cars.length === 0) {	// no cars
			this.MPG = 0;
			this.CPM = 0;
			this.CPMonth = 0;
			return;
		}

		for (let i = 0; i < this.cars.length; ++i) {
			milesPerGallon[i] = Math.round(+this.utilitiesService.CalculateMPG(this.fillUps[this.cars[i].id]));
			costPerMile[i] = +this.utilitiesService.CalculateDPM(this.fillUps[this.cars[i].id]).toFixed(2);
			costPerMonth[i] = +this.utilitiesService.CalculateDPMonth(this.fillUps[this.cars[i].id]).toFixed(2);
		}
		this.MPG = Math.round(milesPerGallon.reduce((memo, item) => memo + item) / milesPerGallon.length);
		this.CPM = costPerMile.reduce((memo, item) => memo + item) / costPerMile.length;
		this.CPM = +this.CPM.toFixed(2);
		this.CPMonth = costPerMonth.reduce((memo, item) => memo + item);
		this.CPMonth = +this.CPMonth.toFixed(2);
		}
	}
