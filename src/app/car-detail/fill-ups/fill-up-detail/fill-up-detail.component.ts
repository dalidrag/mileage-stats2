import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { FillUp } from '../../../common/fillUp';

/**
 * Shows all the details of the selected fill up
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

  constructor(private route: ActivatedRoute) { }

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

}
