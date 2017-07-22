/***********************************************************************************/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';

import { Car }  from '../common/car';
import { FillUp } from '../common/fillUp';
import { User } from '../common/user';
/***********************************************************************************/


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
	user: User[];
  cars: Car[];
	fillUps: Object = {};
  reminders: Object = {};
  unsubscribe;

  constructor(private router: Router, private notificationHubService: NotificationHubService, private route: ActivatedRoute) { }

  ngOnInit() {
  	// Collect cars data, and fill ups for all the cars as two-dimensional matrix
    this.unsubscribe = this.route.data
    .subscribe((data: { user: User[], cars: Car[], fillUps: Object, reminders: Object }) => {
      this.user = data.user;
      this.cars = data.cars;
      this.fillUps = data.fillUps;
      this.reminders = data.reminders;
      this.notificationHubService.emit(HubNotificationType.AppState, 'Dashboard');
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }
}
