/***********************************************************************************/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Car } from '../../common/car';
import { FillUp } from '../../common/fillUp';
import { Reminder } from '../../common/reminder';

import { DataService } from '../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../common/notification-hub.service';
import { UtilitiesService } from '../../common/utilities.service';
/***********************************************************************************/

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
  fillUps: FillUp[];
  reminders: Reminder[];

	sub;

  constructor(private dataService: DataService, private utilitiesService: UtilitiesService, private route: ActivatedRoute, private router: Router, private notificationHubService: NotificationHubService) { }
  
  ngOnInit() {
  	this.sub = this.route.data  /* get a fill up data from the resolver service */
	    .subscribe((data: { car: Car, fillUps: FillUp[], reminders: Reminder[] }) => {
	      this.car = data.car;
        this.fillUps = data.fillUps;
        this.reminders = data.reminders;
  			this.notificationHubService.emit(HubNotificationType.AppState, 'Basic data for ' + this.car.name);
	    });
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  }

  /**
    * Deletes car from the database and navigates to dashboard.
    *
    * @method deleteCar()
    */
    deleteCar(): void {
      this.dataService.deleteCar(this.car.id).then(() => {
        this.notificationHubService.emit(HubNotificationType.Success, 'Car deleted');
        this.router.navigate(['/']);
      })
      .catch(error => this.utilitiesService.handleError(error));
    }
}
