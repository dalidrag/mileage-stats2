import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationHubService, HubNotificationType } from './notification-hub.service';

/**
 * Contains common utilities services such as handling errors
 * and different calculations used on several places in the app
 *
 * @class UtilitiesService
 */
@Injectable()
export class UtilitiesService {
  public avatarURLFragment: string;

  constructor(private notificationHubService: NotificationHubService, private router: Router) {}

  /**
   * Handles all data rw errors within the application
   *
   * @method handleError
   * @param error
   */
  handleError(error): void {
		let message = error.message || error.statusText || 'unknown error';

		this.notificationHubService.emit(HubNotificationType.UnknownError, 'Error: ' + message);

		this.router.navigate(['/']);
	}
}
