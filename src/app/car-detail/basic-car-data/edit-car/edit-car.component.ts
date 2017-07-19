/***********************************************************************************/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Car } from '../../../common/car';

import { DataService } from '../../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../../common/notification-hub.service';
import { UtilitiesService} from '../../../common/utilities.service';
/***********************************************************************************/

/**
 * Presents form for editing a car
 *
 * @class EditCarComponent
 */

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
	car: Car = new Car;
  static cars: Car[] = [{id: '0', model: '', name: '', year:''}];
	static carId:string;

  sub;

  carModelCtrl: FormControl;
  carNameCtrl: FormControl;
  carYearCtrl: FormControl;
  editCarForm: FormGroup;

  constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.data
    .subscribe((data: { cars: Car[] }) => {
      EditCarComponent.cars = data.cars;
    
		  EditCarComponent.carId = this.route.parent.snapshot.params['carId'];
			for (let car of EditCarComponent.cars)
				if (car.id.toString() === EditCarComponent.carId) {
	    		this.car = car;
	    		break;
				}

			this.carModelCtrl = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20)]));
	  	this.carNameCtrl = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20), EditCarComponent.carUnique]));
  		this.carYearCtrl = new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(4), Validators.maxLength(4)]));

			this.editCarForm = new FormGroup({first: this.carModelCtrl, second: this.carNameCtrl, third: this.carYearCtrl});
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
    * Writes the new car data to the database
    * and then navigates away to show all the cars.
    * 
    * @method writeCarData
    */
  writeCarData(): void {
  	this.dataService.updateCar(this.car, null).then(() => {
  		this.notificationHubService.emit(HubNotificationType.Success, 'Car updated.');  // Notify of success via event hub service
      this.router.navigate(['dashboard']);
  	})
    .catch(error => this.utilitiesService.handleError(error));
  }

   /**
    * Trims input fields on losing focus
    *
    * @method onBlur
    * @param event:any
    */
    onBlur(event: any) {
      event.target.value = event.target.value.trim();
    }
    
  /**
   * Listens for escape key pressed to quit the component
   *
   * @method onKey
   * @param event:any
   */
   onKey(event:any): void { // without type info
     if (event.key === 'Escape') {  // escape key was pressed
        this.cancel();    
     } 
   }
   /**
   * Quits the component by routing away
   *
   * @method cancel
   */
   cancel() {
      // Simply navigate back to reminders view
      this.router.navigate(['dashboard']); // Go up to parent route     
   }

  /**
   * A validator for a nick-name input field
   *
   * @method carUnique
   * @param control A form control to validate
   * @return {StringMap<string:boolean>} Returns the result of validation in the form {'carNameNotUnique': true}
   */
  static carUnique(control: FormControl): { [s: string]: boolean } {
    for (let i = 0; i < EditCarComponent.cars.length; ++i)
      if (EditCarComponent.cars[i].id.toString() !== EditCarComponent.carId && control.value === EditCarComponent.cars[i].name)
        return {carNameNotUnique: true};
  }

}
