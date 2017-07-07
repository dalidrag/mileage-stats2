import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Car } from '../../common/car';

import { NotificationHubService, HubNotificationType } from '../../common/notification-hub.service';


/**
 * Handles basic car data for selected car, inside accordion component
 *
 * @class FillUpsComponent
 */
@Component({
  selector: 'app-basic-car-data',
  templateUrl: './basic-car-data.component.html',
  styleUrls: ['./basic-car-data.component.css']
})
export class BasicCarDataComponent implements OnInit, OnDestroy {
	car: Car;	

	sub;

  constructor(private route: ActivatedRoute, private notificationHubService: NotificationHubService) { }
  
  ngOnInit() {
  	this.sub = this.route.data  /* get a fill up data from the resolver service */
	    .subscribe((data: { car: Car }) => {
	      this.car = data.car;
  			this.notificationHubService.emit(HubNotificationType.AppState, 'Showing basic car data for ' + this.car.name);
	    });
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  }
}
