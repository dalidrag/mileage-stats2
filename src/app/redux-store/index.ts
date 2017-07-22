import { combineReducers } from 'redux';

import { IFillUpState, FillUpReducer } from './fill-up.reducer';
import { IReminderState, ReminderReducer } from './reminder.reducer';
import { IUserState, UserReducer } from './user.reducer';
import { IWindowResizeState, WindowResizedReducer } from './window-resize.reducer';

export class IAppState {
	fillUps?: IFillUpState;
	reminders?: IReminderState;
	user?: IUserState;
	windowResized?: IWindowResizeState;
}

export const rootReducer = combineReducers<IAppState>({
  fillUps: FillUpReducer,
  reminders: ReminderReducer,
  user: UserReducer,
  windowResized: WindowResizedReducer
});
