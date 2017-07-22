import { Inject } from '@angular/core';

import { User } from '../common/user';

export class UserActionCreators {
	constructor(@Inject('AppStore') private appStore) { }

	static LOAD_USER: string = 'LOAD_USER';
	static EDIT_USER: string = 'EDIT_USER';

	loadUser(user: User) {
		this.appStore.dispatch({
	     type: UserActionCreators.LOAD_USER,
	     user
	  });
	}
	editUser(newUser: User) {
		this.appStore.dispatch({
			type: UserActionCreators.EDIT_USER,
			newUser
		});
	}
}
