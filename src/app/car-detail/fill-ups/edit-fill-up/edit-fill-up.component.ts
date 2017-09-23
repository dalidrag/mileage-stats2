/***********************************************************************************/
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
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
 * Controls the form for editing a fill up
 *
 * @class EditFillUpComponent
 */

@Component({
  selector: 'app-edit-fill-up',
  templateUrl: './edit-fill-up.component.html',
  styleUrls: ['./edit-fill-up.component.css']
})
export class EditFillUpComponent implements OnInit, OnDestroy {
 	fillUp: FillUp;
 	editFillUpForm: FormGroup;
  carId: string;

  unsubscribe;
  unsubscribeStore;

  constructor(@Inject('AppStore') private appStore, public actionCreators: FillUpActionCreators, private fb: FormBuilder, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
  	this.unsubscribe = this.route.data  /* get a fill up data from the resolver service */
    .subscribe((data: { fillUp: FillUp, car: Car }) => {
      this.fillUp = data.fillUp;
      this.carId = data.car.id;

	  	this.editFillUpForm = this.fb.group({  
	    	      'quantity': [this.fillUp.quantity, Validators.required], 'price': [this.fillUp.pricePerGalon, Validators.compose([Validators.required, Validators.pattern('[0-9]*.?[0-9]+')])],
	    				'odometer': [this.fillUp.odometer, Validators.required], 'station': [this.fillUp.station, Validators.maxLength(20)], 'date': [this.fillUp.date, Validators.required]
	    	    });
	    });

    // Listens for escape key pressed to quit the component
    //subscribe to Redux store state changes
    this.unsubscribeStore = this.appStore.subscribe(() => {
      let state = this.appStore.getState();
      if (state.system.escKeyPressed)
        this.cancel();
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
    this.unsubscribeStore();
  }

 /**
  * Sends add fill up form values to the server
  *
  * @method onSubmit
  * @param formValues The collected form values
  */
  onSubmit(formValues: any): void {  
  	let editedFillUp = new FillUp;
  	editedFillUp.quantity = formValues.quantity;
  	editedFillUp.pricePerGalon = +formValues.price;
  	editedFillUp.odometer = formValues.odometer;
  	editedFillUp.station = formValues.station;
  	editedFillUp.date = formValues.date.toString();
  	editedFillUp.id = this.fillUp.id;

  	this.dataService.updateFillUp(this.carId, editedFillUp).then((response) => {
  		this.router.navigate(['../'], { relativeTo: this.route }); // Go up to parent route
      this.notificationHubService.emit(HubNotificationType.Success, 'FillUp updated');
      this.actionCreators.editFillUp(this.appStore.getState().fillUps.fillUps, editedFillUp);
      this.actionCreators.selectFillUp(editedFillUp);
  	})
  	.catch(error => this.utilitiesService.handleError(error));
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
