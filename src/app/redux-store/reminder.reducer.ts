import { Reminder } from '../common/reminder';

import { ReminderActionCreators } from '../redux-action-creators/reminder.action-creators';

export interface IReminderState {
	selectedReminder: Reminder;	
}

const INITIAL_STATE = {
	selectedReminder: undefined
}

export const ReminderReducer = (state = INITIAL_STATE, action:any) => {
	switch(action.type) {
		case ReminderActionCreators.LOAD_REMINDERS:
			return Object.assign({}, state, {
        reminders: action.reminders
      });
		case ReminderActionCreators.SELECT_REMINDER:
			return Object.assign({}, state, {
	      selectedReminder: action.selectedReminder
	    });
		default:
			return state;
	}	
}