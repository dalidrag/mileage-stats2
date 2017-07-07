/***********************************************************************************/
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

import { FillUp } from '../../../common/fillUp';

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
export class AddFillUpComponent implements OnInit {
	addFillUpForm: FormGroup;

  constructor(@Inject('AppStore') private appStore, public actionCreators: FillUpActionCreators, private fb: FormBuilder, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
  	this.addFillUpForm = this.fb.group({
  		'quantity': ['', Validators.required], 'price': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*.?[0-9]+')])], 'odometer': ['', Validators.required], 'station': ['', Validators.maxLength(20)], 'date': ['', Validators.required]
  	});
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

  	this.dataService.addFillUp(newFillup).then((addedFillUp: FillUp) => {
  		this.router.navigate(['../', addedFillUp.id], { relativeTo: this.route }); // Go up to parent route
      this.notificationHubService.emit(HubNotificationType.Success, 'FillUp Added');
      this.actionCreators.addFillUp(this.appStore.getState().fillUps.fillUps, addedFillUp);
      this.actionCreators.selectFillUp(addedFillUp);
  	})
  	.catch(error => this.utilitiesService.handleError(error));
	}

}
