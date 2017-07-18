import { WindowResizeActionCreators } from '../redux-action-creators/window-resize.action-creators';

export interface IWindowResizeState {
	windowResized: boolean;
}

const INITIAL_STATE = {
	windowResized: false,
}

export const WindowResizedReducer = (state = INITIAL_STATE, action:any) => {
	switch(action.type) {
		case WindowResizeActionCreators.WINDOW_RESIZED:
			return Object.assign({}, state, {
        windowResized: true
      });
    default:
			return state;
	}	
}
