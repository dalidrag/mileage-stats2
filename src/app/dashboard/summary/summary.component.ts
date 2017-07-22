/***********************************************************************************/
import { Component, Input, HostBinding } from '@angular/core';

import { slideFromLeftToRightAnimation } from '../../common/componentAnimations';

import { User } from '../../common/user';
/***********************************************************************************/


/**
 * This component displays the Mileage Stats summary pane
 *
 * @class SummaryComponent
 */

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  animations: [ slideFromLeftToRightAnimation ]
})
export class SummaryComponent {
	@Input()
	user: User;
	@Input()
	cars;
	@Input()
	fillUps;
	@Input()
	reminders;
	@HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
	
	constructor() { }
}
