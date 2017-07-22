import { Inject } from '@angular/core';

export class SystemActionCreators {
	constructor(@Inject('AppStore') private appStore) { }

	static WINDOW_RESIZED: string = 'WINDOW_RESIZED';
	static ESC_KEY_PRESSED: string = 'ESC_KEY_PRESSED';

	windowResized() {
		this.appStore.dispatch({
	     type: SystemActionCreators.WINDOW_RESIZED
	  });
	}
	escKeyPressed() {
		this.appStore.dispatch({
	     type: SystemActionCreators.ESC_KEY_PRESSED
	  });
	}
}
