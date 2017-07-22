import { combineReducers } from 'redux';

import { IFillUpState, FillUpReducer } from './fill-up.reducer';
import { IReminderState, ReminderReducer } from './reminder.reducer';
import { IUserState, UserReducer } from './user.reducer';
import { ISystemState, SystemReducer } from './system.reducer';

export class IAppState {
	fillUps?: IFillUpState;
	reminders?: IReminderState;
	user?: IUserState;
	system?: ISystemState;
}

export const rootReducer = combineReducers<IAppState>({
  fillUps: FillUpReducer,
  reminders: ReminderReducer,
  user: UserReducer,
  system: SystemReducer
});
