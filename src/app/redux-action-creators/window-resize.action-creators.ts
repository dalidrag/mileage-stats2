import { Inject } from '@angular/core';

export class WindowResizeActionCreators {
	constructor(@Inject('AppStore') private appStore) { }

	static WINDOW_RESIZED: string = 'WINDOW_RESIZED';

	windowResized() {
		this.appStore.dispatch({
	     type: WindowResizeActionCreators.WINDOW_RESIZED
	  });
	}
}
