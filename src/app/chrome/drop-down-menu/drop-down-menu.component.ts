import { Component, OnInit, EventEmitter, Output } from '@angular/core';

/**
 * Provides drop-down main menu for narrow screens
 *
 * @class DropDownMenuComponent
 */
@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.css']
})
export class DropDownMenuComponent {
	@Output()
	onSignOutClick = new EventEmitter<boolean>();
	displayed = false;

  constructor() { }

  ngOnInit() {
  }

  SignOutClick() {
  	this.onSignOutClick.emit(true);
  }

  MenuClick() {
  	this.displayed ? this.displayed = false : this.displayed = true;
  }

}
