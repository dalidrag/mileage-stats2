/***********************************************************************************/
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Car } from '../../common/car';
import { FillUp } from '../../common/fillUp';

// The class which handles AJAX data services
import { DataService } from '../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../common/notification-hub.service';
import { UtilitiesService } from '../../common/utilities.service';
/***********************************************************************************/

/**
 * This component displays the list of all the cars by iterating
 * cars array and sending each car to car component
 * for display
 *
 * @class CarsListComponent
 */
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit, OnDestroy {
	@Input()
	cars: Car[];
	@Input()
	fillUps: FillUp[];
	selectedCarId: string;

	sub;

  constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService,
  	private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.router.events.subscribe((val) => {
  		if (val instanceof NavigationEnd) {
  			this.selectedCarId = this.route.snapshot.params['carId'];
  		}
  	})
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  }

}
