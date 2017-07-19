/***********************************************************************************/
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

import { FillUp } from '../../../common/fillUp';
import { Car } from '../../../common/car';

import { DataService } from '../../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../../common/notification-hub.service';
import { UtilitiesService } from '../../../common/utilities.service';

import { FillUpActionCreators } from '../../../redux-action-creators/fill-up-action-creators';
/***********************************************************************************/

/**
 * Controls the form for adding a fill up
 *
 * @class AddFillUpComponent
 */
@Component({
  selector: 'app-add-fill-up',
  templateUrl: './add-fill-up.component.html',
  styleUrls: ['./add-fill-up.component.css']
})
export class AddFillUpComponent implements OnInit, OnDestroy {
	addFillUpForm: FormGroup;
  carId: string;
  unsubscribe;

  constructor(@Inject('AppStore') private appStore, public actionCreators: FillUpActionCreators, private fb: FormBuilder, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
  	this.unsubscribe = this.route.data    // Get car data from the resolver service
        .subscribe((data: { car: Car }) => {
          this.carId = data.car.id;
        });

    this.addFillUpForm = this.fb.group({
  		'quantity': ['', Validators.required], 'price': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*.?[0-9]+')])], 'odometer': ['', Validators.required], 'station': ['', Validators.maxLength(20)], 'date': ['', Validators.required]
  	});
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

 /**
  * Sends add fill up form values to the server
  *
  * @method onSubmit
  * @param formValues The collected form values
  */
  onSubmit(formValues: any): void {  
  	let newFillup = new FillUp;
  	newFillup.quantity = formValues.quantity;
  	newFillup.pricePerGalon = +formValues.price;
  	newFillup.odometer = formValues.odometer;
  	newFillup.station = formValues.station;
  	newFillup.date = formValues.date.toString();

  	this.dataService.addFillUp(this.carId, newFillup).then((addedFillUp: FillUp) => {
  		this.router.navigate(['../', addedFillUp.id], { relativeTo: this.route }); // Go up to parent route
      this.notificationHubService.emit(HubNotificationType.Success, 'FillUp Added');
      this.actionCreators.addFillUp(this.appStore.getState().fillUps.fillUps, addedFillUp);
      this.actionCreators.selectFillUp(addedFillUp);
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
      this.router.navigate(['../'], { relativeTo: this.route }); // Go up to parent route     
   }
}
