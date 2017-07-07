import { Component, OnInit } from '@angular/core';

import { NotificationHubService, HubNotificationType } from '../common/notification-hub.service';

/**
 * Component for showing application state in the status bar
 *
 * @class StatusBarComponent
 */
@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  statusMessage: string;
  notificationMessage: string = '';
  notificationType: HubNotificationType;
  fadingOut: boolean = false;

  constructor(private notificationHubService: NotificationHubService) { }

  ngOnInit() {
  	this.notificationHubService.eventStream.subscribe(value => {  // Show messages 
      if (this.notificationType !== HubNotificationType.AppState)
        this.notificationType = value.eventType;
      if (value.eventType === HubNotificationType.Success || value.eventType === HubNotificationType.Error) {
        this.notificationMessage = value.message;
        this.scheduleNotificationFadeOut();
      }
      else if (value.eventType === HubNotificationType.UnknownError) {
        value.message ? this.notificationMessage = value.message : this.notificationMessage = 'Error';
       this.scheduleNotificationFadeOut();
      }
      else if (value.eventType === HubNotificationType.AppState) {
        this.statusMessage = value.message;
      }
		});
  }

 /** 
  * Starts fade out of notification message after 3 seconds
  *
  * @method scheduleNotificationFadeOut
  */
  scheduleNotificationFadeOut() {
    setTimeout(() => {
      this.fadingOut = true;
      this.scheduleNotificationClearing();
    }, 3000)
  }
 /**
  * Clears notification message after 1.5 seconds
  * 
  * @method scheduleNotificationClearing
  */
  scheduleNotificationClearing() {
    setTimeout(() => {
      this.notificationMessage = '';
    this.fadingOut = false;
    }, 1500);
  }
}
