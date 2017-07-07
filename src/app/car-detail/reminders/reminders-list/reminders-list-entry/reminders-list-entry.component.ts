import { Component, Input, OnInit } from '@angular/core';

import { Reminder } from '../../../../common/reminder';

/**
 * Shows an individual reminder in the reminders list
 *
 * @class RemindersListEntryComponent
 */
@Component({
  selector: 'app-reminders-list-entry',
  templateUrl: './reminders-list-entry.component.html',
  styleUrls: ['./reminders-list-entry.component.css']
})
export class RemindersListEntryComponent implements OnInit {
	@Input()
	reminder: Reminder;	// Reminder up to show
	@Input()
	selectedReminder;	// id of selected reminder, used to eventualy style this reminder as selected
	overDue: boolean; // this flag tells whether to style reminder as over due
	date: string;			// customized representation of date for showing

	ngOnInit() {
		let date = new Date(this.reminder.date);
		
		this.overDue = Date.now() > date.valueOf(); // valueOf is needed to convert date into number (of miliseconds since  January 1, 1970, 00:00:00 UTC)
	
		let options = { year: 'numeric', month: 'long', day: 'numeric' };
		this.date = date.toLocaleString('en-US', options)
	}
}
