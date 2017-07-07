import { combineReducers } from 'redux';

import { IFillUpState, FillUpReducer } from './fill-up.reducer';
import { IReminderState, ReminderReducer } from './reminder.reducer';

export class IAppState {
	fillUps?: IFillUpState;
	reminders?: IReminderState;
}

export const rootReducer = combineReducers<IAppState>({
  fillUps: FillUpReducer,
  reminders: ReminderReducer
});
