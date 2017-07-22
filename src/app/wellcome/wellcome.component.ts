import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

import { DataService } from '../common/data.service';

import { UserActionCreators } from '../redux-action-creators/user.action-creators';
import { User } from '../common/user';

/**
 * Shows 'wellcome, <user>' message in the status bar
 *
 * @class WellcomeComponent
 */
@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit, OnDestroy {
	user: User;
	name: string;
	unsubscribeStore;

	constructor(@Inject('AppStore') private appStore, private actionCreators:UserActionCreators, private dataService:  DataService) { }

  ngOnInit() {
  	this.dataService.getUser().then((user) => {
      this.actionCreators.loadUser(user);
      this.name = user.displayName ? user.displayName : user.username;
  	})
  	this.unsubscribeStore = this.appStore.subscribe(() => {
      let state = this.appStore.getState();
      this.user = state.user.user;
      this.name = this.user.displayName ? this.user.displayName : this.user.username;
    });
  }

  ngOnDestroy() {
    this.unsubscribeStore();
  }
}
