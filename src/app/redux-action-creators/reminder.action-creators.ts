import { Inject } from '@angular/core';

import { Reminder } from '../common/reminder';

export class ReminderActionCreators {
	constructor(@Inject('AppStore') private appStore) { }

	static LOAD_REMINDERS: string = 'LOAD_REMINDERS';
	static SELECT_REMINDER: string = 'SELECT_REMINDER';
	static ADD_REMINDER: string = 'ADD_REMINDER';
	static DESELECT_REMINDERS: string = 'DESELECT_REMINDERS';

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
	addReminder(reminders: Reminder[], reminder: Reminder) {
		this.appStore.dispatch({
			type: ReminderActionCreators.ADD_REMINDER,
			reminders,
			reminder
		});
	}
	deselectReminders() {
		this.appStore.dispatch({
			type: ReminderActionCreators.DESELECT_REMINDERS
		})
	}
}