import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FillUp } from '../../../common/fillUp';

import { DataService } from '../../../common/data.service';
import { NotificationHubService, HubNotificationType } from '../../../common/notification-hub.service';
import { UtilitiesService } from '../../../common/utilities.service';

import { FillUpActionCreators } from '../../../redux-action-creators/fill-up-action-creators';

/**
 * Shows all the details of the selected fill up
 * Also handles deletion of a fill up
 *
 * @class FillUpDetailComponent
 */

@Component({
  selector: 'app-fill-up-detail',
  templateUrl: './fill-up-detail.component.html',
  styleUrls: ['./fill-up-detail.component.css']
})
export class FillUpDetailComponent implements OnInit, OnDestroy {
	fillUp: FillUp;
	fillUpId: string;

	sub;
	sub2;

  constructor(@Inject('AppStore') private appStore, public actionCreators: FillUpActionCreators, private dataService: DataService, private utilitiesService: UtilitiesService, private notificationHubService: NotificationHubService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.sub2 = this.route.data	/* get a fill up data from the resolver service */
  	    .subscribe((data: { fillUp: FillUp }) => {
  	      this.fillUp = data.fillUp;
  	    });

  	this.sub = this.route.params
    .subscribe((params: Params) => {
		this.fillUpId = params['id'];
	 })
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  	this.sub2.unsubscribe();
  }

  deleteFillUp(): void {
    this.dataService.deleteFillUp(this.fillUp.id).then(()=>{
      this.notificationHubService.emit(HubNotificationType.Success, 'Fill up deleted');
      this.router.navigate(['../'], {relativeTo: this.route});
      this.actionCreators.deleteFillUp(this.appStore.getState().fillUps.fillUps, this.fillUp);
      this.actionCreators.deselectFillUps();  
    })
    .catch(error => this.utilitiesService.handleError(error));
  }
}
