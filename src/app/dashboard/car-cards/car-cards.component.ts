/***********************************************************************************/
import { Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from '../../common/car';
import { FillUp } from '../../common/fillUp';

// The class which handles AJAX data services
import { NotificationHubService, HubNotificationType } from '../../common/notification-hub.service';
import { UtilitiesService } from '../../common/utilities.service';

import { slideFromRightToLeftAnimation } from '../../common/componentAnimations';
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
  styleUrls: ['./car-cards.component.css'],
  animations: [ slideFromRightToLeftAnimation ]
})
export class CarCardsComponent {
	@Input()
  cars: Car[];
	@Input()
  fillUps: {};
	@HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  constructor() {}
}
