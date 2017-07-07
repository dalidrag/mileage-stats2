import { Inject } from '@angular/core';

import { FillUp } from '../common/fillUp';

export class FillUpActionCreators {
	constructor(@Inject('AppStore') private appStore) { }	

	static LOAD_FILLUPS: string = 'LOAD_FILLUPS';
	static ADD_FILLUP: string = 'ADD_FILLUP';
	static SELECT_FILLUP: string = 'SELECT_FILLUP';
	static DESELECT_FILLUPS: string = 'DESELECT_FILLUPS';

	loadFillUps(fillUps: FillUp[]) {
		this.appStore.dispatch({
	     type: FillUpActionCreators.LOAD_FILLUPS,
	     fillUps
	  });
	}
	addFillUp(fillUps: FillUp[], fillUp: FillUp) {
		this.appStore.dispatch({
			type: FillUpActionCreators.ADD_FILLUP,
			fillUps,
			fillUp
		});
	}
	selectFillUp(selectedFillUp: FillUp) {
			this.appStore.dispatch({
				type: FillUpActionCreators.SELECT_FILLUP,
				selectedFillUp
			});
		}
	deselectFillUps() {
		this.appStore.dispatch({
			type: FillUpActionCreators.DESELECT_FILLUPS
		})
	}
}