/***********************************************************************************/
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd }   from '@angular/router';

import { FillUp } from '../../common/fillUp';
import { Car } from '../../common/car';

import { NotificationHubService, HubNotificationType } from '../../common/notification-hub.service';

import { FillUpActionCreators } from '../../redux-action-creators/fill-up-action-creators';
/***********************************************************************************/

/**
 * Handles fill ups for selected car, inside accordion component
 *
 * @class FillUpsComponent
 */
@Component({
  selector: 'app-fill-ups',
  templateUrl: './fill-ups.component.html',
  styleUrls: ['./fill-ups.component.css']
})
export class FillUpsComponent implements OnInit, OnDestroy {
	fillUps: FillUp[];
  car: Car;
  selectedFillup;

	sub;
  unsubscribeRouterEvents;
  unsubscribeReduxStore;

  constructor(@Inject('AppStore') private appStore, public actionCreators: FillUpActionCreators, private route: ActivatedRoute, private router:Router, private notificationHubService: NotificationHubService) { }

  ngOnInit() {
  	//subscribe listener to state changes
    this.unsubscribeReduxStore = this.appStore.subscribe(() => {
      let state = this.appStore.getState();
      this.fillUps = state.fillUps.fillUps;
      // Now sort fill ups by date
      this.fillUps.sort((fillUp1, fillUp2) => fillUp1.date < fillUp2.date ? 1 : -1);
    });
    this.sub = this.route.data // Get fillUps and car data from the resolver service
    .subscribe((data: { fillUps: FillUp[], car: Car }) => {
      this.actionCreators.loadFillUps(data.fillUps);
      this.car = data.car;
    });
    
    // Listen to route changes to display notification message about app state
    this.unsubscribeRouterEvents = this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) { // if succesful navigation to fillUps route happened
        if (this.route.children[0]) {  // check if there are subroutes
          console.log('There are subroutes');
          if (this.route.children[0].snapshot.url[0].toString() === 'addFillUp') {
            this.notificationHubService.emit(HubNotificationType.AppState, 'Adding a new fill up for ' + this.car.name);
          }
          else if (this.route.children[0].children[0] == undefined && this.route.children[0].snapshot.url.length === 1) { // if no further content after /fillUps/<number>
            this.notificationHubService.emit(HubNotificationType.AppState, 'A fill up for ' + this.car.name);  // update app state write up
          }
          else {  // we are editing a fill up
            this.notificationHubService.emit(HubNotificationType.AppState, 'Editing a fill up for ' + this.car.name);  // update app state write up            
          }
        }  // finished with sub routes
        else  {  // no subroutes, we are showing fill ups list
          this.notificationHubService.emit(HubNotificationType.AppState, 'Fill ups for ' + this.car.name);  // update app state write up
          console.log('There are no subroutes');
        }
      } // Finished with all the routes
    });
    this.notificationHubService.emit(HubNotificationType.AppState, 'Fill ups for ' + this.car.name);  // update app state write up
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
    this.unsubscribeRouterEvents.unsubscribe();
    this.unsubscribeReduxStore();
  }

/**
 * Presents add fill up component and deselects currently selected fill up
 *
 * @method onAddFillUpClick
 */
  onAddFillUpClick(): void {
    this.router.navigate(['addFillUp'], {relativeTo: this.route});
    this.actionCreators.deselectFillUps();
  }

}
