/***********************************************************************************/
import { Component, OnInit, Input, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { FillUp } from '../../../common/fillUp';

import { DataService} from '../../../common/data.service';

import { FillUpActionCreators } from '../../../redux-action-creators/fill-up-action-creators';
/***********************************************************************************/

/**
 * Displays a vertical list of fill ups for the selected car
 *
 * @class FillUpsListComponent
 */
@Component({
  selector: 'app-fill-ups-list',
  templateUrl: './fill-ups-list.component.html',
  styleUrls: ['./fill-ups-list.component.css']
})
export class FillUpsListComponent implements OnInit, OnChanges {
	@Input()
	fillUps: FillUp[];
	selectedFillUp: FillUp;

  unsubscribeReduxStore;

  constructor(@Inject('AppStore') private appStore, public actionCreators: FillUpActionCreators, private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.unsubscribeReduxStore = this.appStore.subscribe(() => {
      let state = this.appStore.getState();
      this.selectedFillUp = state.fillUps.selectedFillUp;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fillUps) {
      this.fillUps = changes.fillUps.currentValue;
      // Now sort fill ups by date
      this.fillUps.sort((fillUp1, fillUp2) => fillUp1.date < fillUp2.date ? 1 : -1);
    }
  }
  /**
   * Updates fill up detail view and marks fill ups list entry as selected
   *
   * @method onSelect
   */

  onSelect(fillUp: FillUp): void {
  	this.router.navigate([fillUp.id], { relativeTo: this.route });
    this.actionCreators.selectFillUp(fillUp);
  }

}
