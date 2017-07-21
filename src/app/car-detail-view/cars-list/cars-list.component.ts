/***********************************************************************************/
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Car } from '../../common/car';
import { FillUp } from '../../common/fillUp';

import { NotificationHubService, HubNotificationType } from '../../common/notification-hub.service';
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
  selectedCommand: number;

	sub;

  constructor(private notificationHubService: NotificationHubService,
  	private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
		this.selectedCarId = this.route.snapshot.params['carId'];
    this.checkActiveCommand();

    this.sub = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.checkActiveCommand();
        
        this.selectedCarId = this.route.snapshot.params['carId'];

   		}
  	})
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  }

  checkActiveCommand() {
    if (this.route.children[0].snapshot.url[0]) {  // check if there are subroutes
      if (this.route.children[0].snapshot.url[0].toString() === 'fillUps') {
        // Fill ups are selected
        this.selectedCommand = 1;
      }
      else if (this.route.children[0].snapshot.url[0].toString() === 'reminders') {
        // Reminders are selected
        this.selectedCommand = 2;
      }
    }  // finished with sub routes
    else  {  // no subroutes, details are selected
      this.selectedCommand = 0;
    }
  }
}
