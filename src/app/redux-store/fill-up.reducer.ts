import clone from 'lodash';

import { FillUp } from '../common/fillUp';

import { FillUpActionCreators } from '../redux-action-creators/fill-up-action-creators';

export interface IFillUpState {
	fillUps: FillUp[];
	selectedFillUp: FillUp;
}

const INITIAL_STATE = {
	fillUps: [],
	selectedFillUp: undefined
}

export const FillUpReducer = (state = INITIAL_STATE, action:any) => {
	switch(action.type) {
		case FillUpActionCreators.LOAD_FILLUPS:
			return Object.assign({}, state, {
        fillUps: action.fillUps
      });
		case FillUpActionCreators.ADD_FILLUP:
			let newFillUps = clone(action.fillUps).value();	// value() unwraps a lodash wrapper object
			newFillUps.push(action.fillUp);
 		  return Object.assign({}, state, {
        fillUps: newFillUps
      });
    case FillUpActionCreators.SELECT_FILLUP:
    	return Object.assign({}, state, {
	      selectedFillUp: action.selectedFillUp
	    });
	  case FillUpActionCreators.DESELECT_FILLUPS:
			return { fillUps: state.fillUps, selectedFillUp: undefined }
		default:
			return state;
	}	
}