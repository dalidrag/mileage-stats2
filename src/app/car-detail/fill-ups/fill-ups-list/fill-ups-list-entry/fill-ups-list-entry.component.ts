import { Component, OnInit, Input } from '@angular/core';

import { FillUp } from '../../../../common/fillUp';

@Component({
  selector: 'app-fill-ups-list-entry',
  templateUrl: './fill-ups-list-entry.component.html',
  styleUrls: ['./fill-ups-list-entry.component.css']
})
export class FillUpsListEntryComponent implements OnInit {
	@Input()
	fillUp: FillUp;
	@Input()
	selectedFillUp;

  constructor() { }

  ngOnInit() {
  }

}
