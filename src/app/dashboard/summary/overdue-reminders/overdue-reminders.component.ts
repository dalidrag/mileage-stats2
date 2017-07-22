/***********************************************************************************/
import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Reminder } from '../../../common/reminder';
/***********************************************************************************/


/**
 * This component displays the Mileage Stats summary pane
 *
 * @class SummaryComponent
 */
@Component({
  selector: 'app-overdue-reminders',
  templateUrl: './overdue-reminders.component.html',
  styleUrls: ['./overdue-reminders.component.css']
})
export class OverdueRemindersComponent implements OnInit {
	@Input()
	cars;
	@Input()
	reminders;
	overdueReminders: Reminder[] = [];

  constructor() { }

  ngOnInit() {
  	for (let i = 0; i < this.cars.length; ++i) {
  		this.overdueReminders.push(
  			// eliminate non-overdue reminders
        this.reminders[this.cars[i].id].filter((reminder) => {
  				if (new Date(reminder.date).valueOf() < Date.now()) return true;
  				else return false;
  			}).map((reminder) => { // add car property
  				reminder.car = i;
  				return reminder;
  			})
  		);
  	}
    // We constructed array of arrays of reminders
    // So we are going to flatten it to a linear array
  	this.overdueReminders = _.flattenDeep(this.overdueReminders);
    this.overdueReminders.sort((a: Reminder, b: Reminder) => a.date < b.date ? 1 : -1)
  }
}
