import { Component, Input } from '@angular/core';

import { FillUp } from '../../../../common/fillUp';

/**
 * Displays single entry in fill ups list
 *
 * @class FillUpsListEntryComponent
 */
@Component({
  selector: 'app-fill-ups-list-entry',
  templateUrl: './fill-ups-list-entry.component.html',
  styleUrls: ['./fill-ups-list-entry.component.css']
})
export class FillUpsListEntryComponent {
	@Input()
	fillUp: FillUp;
	@Input()
	selectedFillUp: FillUp;
}
