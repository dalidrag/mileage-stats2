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
  imgCacheBustingURLFragment: string; 

  constructor(private router:Router, private utilitiesService:UtilitiesService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fillUps) this.fillUps = changes.fillUps.currentValue;
    if (changes.selectedCommand) this.selectedCommand = changes.selectedCommand.currentValue;
    
    this.fillUps.sort((fillUp1, fillUp2) => fillUp1.date > fillUp2.date ? 1 : -1);
    this.milesPerGallon =  Math.round(+this.utilitiesService.CalculateMPG(this.fillUps).toFixed(2));
    this.costPerMile = +this.utilitiesService.CalculateDPM(this.fillUps).toFixed(2);
    this.costPerMonth = +this.utilitiesService.CalculateDPMonth(this.fillUps).toFixed(2);
    // Note the plus sign that drops any "extra" zeroes at the end.
    // It changes the result (which is a string) into a number again
    // which means that it uses only as many digits as necessary.

    this.imgCacheBustingURLFragment = this.utilitiesService.avatarURLFragment;
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
}
