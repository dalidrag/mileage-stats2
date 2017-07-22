import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Car }  from '../common/car';
import { FillUp } from '../common/fillUp';

import { SystemActionCreators } from '../redux-action-creators/system.action-creators';

 /**
	* This component is a view wrapper for car detail view
	*
	* @class CarDetailViewComponent
	*/

@Component({
  selector: 'app-car-detail-view',
  templateUrl: './car-detail-view.component.html',
  styleUrls: ['./car-detail-view.component.css']
})
export class CarDetailViewComponent implements OnInit, OnDestroy {
	cars: Car[];
  fillUps: FillUp[];

  sub;

  constructor(public actionCreators: SystemActionCreators, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.route.data  /* get cars and fill up data from the resolver service */
      .subscribe((data: { cars: Car[], fillUps: FillUp[] }) => {
        this.cars = data.cars;
        this.fillUps = data.fillUps;
    });

    window.addEventListener("resize", () => {
      this.actionCreators.windowResized();
    });
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  }

}
