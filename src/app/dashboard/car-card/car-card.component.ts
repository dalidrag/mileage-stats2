import { Component, OnInit, Input } from '@angular/core';

import { FillUp } from '../../fillUp';
import { Car } from '../../car';

/**
 * This component shows a car card, which displays car name and model, car avatar, 
 * three navigational buttons and three fields with basic statistics
 *
 * @class CarComponent
 */
@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
	@Input()
  car: Car;
  @Input()
  fillUps: FillUp[];
	milesPerGallon: number;
	costPerMile: number;
	costPerMonth: number;

  constructor() { }

  ngOnInit() {
  	// this.dataService.getCars().then((cars)=>{
  	// 	this.carName = cars[0].name;
  	// 	this.carModel = cars[0].model;
  	// });
   //  this.dataService.getFillUps().then((fillUps) => {
      this.milesPerGallon = +this.CalculateMPG(this.fillUps).toFixed(2);
      this.costPerMile = +this.CalculateDPM(this.fillUps).toFixed(2);
      this.costPerMonth = +this.CalculateDPMonth(this.fillUps).toFixed(2);
      // Note the plus sign that drops any "extra" zeroes at the end.
      // It changes the result (which is a string) into a number again
      // which means that it uses only as many digits as necessary.
    // });
  }

  CalculateMPG(fillUps: FillUp[]): number {
    if (!fillUps || fillUps.length === 0) return 0;

    let MilesTravelled:number = fillUps[fillUps.length-1].odometer - fillUps[0].odometer;
    let SpentFuel:number = fillUps.map(fillUp => fillUp.quantity)
                                  .reduce((accumulator, currentValue) => {
                                      return accumulator + currentValue;
                                  });
    return MilesTravelled/SpentFuel;
  }

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

  monthDiff(sD1: string, sD2: string): number{
    let months;

    let d1 = new Date(Date.parse(sD1));
    let d2 = new Date(Date.parse(sD2));

    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();

    return months <= 0 ? 0 : months;
  }

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

}