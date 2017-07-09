/***********************************************************************************/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from '../../common/car';
import { FillUp } from '../../common/fillUp';

// The class which handles AJAX data services
import { DataService } from '../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../common/notification-hub.service';
import { UtilitiesService } from '../../common/utilities.service';
/***********************************************************************************/

/**
 * This component displays all the cars by iterating
 * cars array and sending each car to car component
 * for display
 *
 * @class CarsComponent
 */
@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.css']
})
export class CarCardsComponent implements OnInit, OnDestroy {
	cars: Car[];
	fillUps: FillUp[];

  sub;

  constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.route.data  /* get cars, fill up and reminders data from the resolver service */
    .subscribe((data: { cars: Car[], fillUps: FillUp[] }) => {
      this.cars = data.cars;
      this.fillUps = data.fillUps;
      this.notificationHubService.emit(HubNotificationType.AppState, 'Showing cars');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
