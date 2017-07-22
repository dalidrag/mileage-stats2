import { User } from '../common/user';

import { UserActionCreators } from '../redux-action-creators/user.action-creators';

export interface IUserState {
	user: User;
}

const INITIAL_STATE = {
	user: {},
}

export const UserReducer = (state = INITIAL_STATE, action:any) => {
	switch(action.type) {
		case UserActionCreators.LOAD_USER:
			return Object.assign({}, state, {
        user: action.user
      });
		case UserActionCreators.EDIT_USER:
 		  return Object.assign({}, state, {
        user: action.newUser
      });
    default:
			return state;
	}	
}
