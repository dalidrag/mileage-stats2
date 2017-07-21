/****************************************************************************/
import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

import { FillUp } from '../../common/fillUp';
import { Car } from '../../common/car';

import { UtilitiesService} from '../../common/utilities.service';
/****************************************************************************/

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
export class CarCardComponent implements OnChanges {
	@Input()
  car: Car;
  @Input()
  fillUps: FillUp[];
  @Input()
  selectedCarId: string;
  @Input()
  showStatisticsDefault: boolean;   // Whether to show statistics at the bottom of the car card
  @Input()
  selectedCommand: number;
	milesPerGallon: number;
	costPerMile: number;
	costPerMonth: number;

  constructor(private router:Router, private utilitiesService:UtilitiesService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fillUps) this.fillUps = changes.fillUps.currentValue;
    if (changes.selectedCommand) this.selectedCommand = changes.selectedCommand.currentValue;
    
    this.fillUps.sort((fillUp1, fillUp2) => fillUp1.date > fillUp2.date ? 1 : -1);
    this.milesPerGallon =  Math.round(+this.CalculateMPG(this.fillUps).toFixed(2));
    this.costPerMile = +this.CalculateDPM(this.fillUps).toFixed(2);
    this.costPerMonth = +this.CalculateDPMonth(this.fillUps).toFixed(2);
    // Note the plus sign that drops any "extra" zeroes at the end.
    // It changes the result (which is a string) into a number again
    // which means that it uses only as many digits as necessary.
  }

  switchToDetails(): void {
    this.router.navigate(['carDetails', this.car.id]);
  }

  buttonDetails(event: Event): void {
    event.stopPropagation();
    this.router.navigate(['carDetails', this.car.id]);
  }
  buttonFillUps(event: Event): void {
    event.stopPropagation();
    this.router.navigate(['carDetails', this.car.id, 'fillUps']);
  }
  buttonReminders(event: Event): void {
    event.stopPropagation();
    this.router.navigate(['carDetails', this.car.id, 'reminders']);
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
