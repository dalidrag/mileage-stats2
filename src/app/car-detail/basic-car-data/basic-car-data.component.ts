import { Component, OnInit } from '@angular/core';

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
export class BasicCarDataComponent implements OnInit {

  constructor(private notificationHubService: NotificationHubService) { }

  ngOnInit() {
  	this.notificationHubService.emit(HubNotificationType.AppState, 'Showing basic car data');
  }

}
