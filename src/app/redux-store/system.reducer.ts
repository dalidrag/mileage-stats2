import { SystemActionCreators } from '../redux-action-creators/system.action-creators';

export interface ISystemState {
	windowResized: boolean;
	escKeyPressed: boolean;
}

const INITIAL_STATE = {
	windowResized: false,
	escKeyPressed: false
}

export const SystemReducer = (state = INITIAL_STATE, action:any) => {
	switch(action.type) {
		case SystemActionCreators.WINDOW_RESIZED:
			return Object.assign({}, state, {
        windowResized: true
      });
    case SystemActionCreators.ESC_KEY_PRESSED:
			return Object.assign({}, state, {
        escKeyPressed: true
      });
    default:
			return state;
	}	
}
