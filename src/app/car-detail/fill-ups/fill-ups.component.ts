import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';

import { FillUp } from '../../common/fillUp';

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

	sub;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.route.data // Get fillUps data from the resolver service
    .subscribe((data: { fillUps: FillUp[] }) => {
      this.fillUps = data.fillUps;
    });
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  }

}
