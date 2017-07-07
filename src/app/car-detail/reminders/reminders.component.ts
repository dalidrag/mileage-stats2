import { Component, OnInit } from '@angular/core';

import { NotificationHubService, HubNotificationType } from '../../common/notification-hub.service';


/**
 * Handles reminders for selected car, inside accordion component
 *
 * @class FillUpsComponent
 */
@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  constructor(private notificationHubService: NotificationHubService) { }

  ngOnInit() {
    this.notificationHubService.emit(HubNotificationType.AppState, 'Showing reminders');
  }

}
