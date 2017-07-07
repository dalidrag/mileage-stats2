import { Inject } from '@angular/core';

import { Reminder } from '../common/reminder';

export class ReminderActionCreators {
	constructor(@Inject('AppStore') private appStore) { }

	static LOAD_REMINDERS: string = 'LOAD_REMINDERS';
	static SELECT_REMINDER: string = 'SELECT_REMINDER';

	loadReminders(reminders: Reminder[]) {
		this.appStore.dispatch({
	     type: ReminderActionCreators.LOAD_REMINDERS,
	     reminders
	  });
	}
	selectReminder(selectedReminder: Reminder) {
		this.appStore.dispatch({
			type: ReminderActionCreators.SELECT_REMINDER,
			selectedReminder
		})
	}
}