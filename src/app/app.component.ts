import { Component, OnInit } from '@angular/core';

import { SystemActionCreators } from './redux-action-creators/system.action-creators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private actionCreators: SystemActionCreators) { }

  ngOnInit() {
  	window.addEventListener("keydown", (event) => {
  		if (event.key === 'Escape')
      	this.actionCreators.escKeyPressed();
    });
  }
}
