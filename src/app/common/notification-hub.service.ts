import { Injectable, EventEmitter } from '@angular/core';

/**
 * This service is notification hub for the application
 * It exposes a method which any part of code can use to emit an event
 * And any component can subsribe to listen to events emitted from the hub
 *
 * @class NotificationHubService
 */
@Injectable()
export class NotificationHubService {
	public eventStream: EventEmitter<any> = new EventEmitter();

  constructor() { }

  /**
  	* This method is called whenever a part of application wants to
   * use the Notification Hub to present a message
   *
   * @method emit 
   * @param HubNotificationType a type of message to present
   * @param message The contents of the message
   */
	emit(eventType: HubNotificationType, message: string): void {
		this.eventStream.emit({eventType, message})
  }
}
export enum HubNotificationType {Error, UnknownError, Success, AppState}



