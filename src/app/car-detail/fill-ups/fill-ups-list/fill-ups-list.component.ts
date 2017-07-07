import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { FillUp } from '../../../common/fillUp';

import { DataService} from '../../../common/data.service';

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
export class FillUpsListComponent implements OnInit {
	@Input()
	fillUps: FillUp[];
	selectedFillUp: FillUp;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) { // if succesful navigation to fillUps route happened
        // analyze router state and refetch data if needed; we will always refresh
        this.dataService.getFillUps().then((fillUps) => {
          this.fillUps = fillUps;
        }); 
      }
    });
  }

  onSelect(fillUp: FillUp): void {
  	this.selectedFillUp = fillUp;
  	this.router.navigate([fillUp.id], { relativeTo: this.route });
  }

}
