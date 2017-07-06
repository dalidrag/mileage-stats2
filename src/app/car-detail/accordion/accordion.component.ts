import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';

/**
 * Displays accordion component, which handles all the car detail data
 *
 * @class FillUpsComponent
 */
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
	previousTab: number = 0;
	tabName: string[] = ['', 'fill-ups', 'reminders'];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  basicCarDataClicked(): void {
    this.router.navigate(['basicCarData'], { relativeTo: this.route });
    this.arrangeTabs(0);
  }
  fillUpsClicked(): void {
    this.router.navigate(['fillUps'], { relativeTo: this.route });
    this.arrangeTabs(1);
  }
  remindersClicked(): void {
    this.router.navigate(['reminders'], { relativeTo: this.route });
    this.arrangeTabs(2);
  }


  arrangeTabs(newTab: number): void {
    let element: HTMLElement;

    // Move to the left tabs that should be moved to left
    // Which ones is decided from the indexes of currently selected and newly selected tabs
    if (newTab > this.previousTab) {
      for (let i = this.previousTab + 1; i <= newTab; ++i) {
        element = document.getElementsByClassName(this.tabName[i]).item(0) as HTMLElement;
        if (i === 1) {
          element.style.left = '30px'; 
          element.style.right = '930px'; 
         }
        else {
          element.style.left = '60px';
          element.style.right = '900px';
        }
      }
    }
    // Or move to the right tabs that should be moved to the right
    else if (this.previousTab > newTab) {
      for (let i = newTab + 1; i <= this.previousTab; ++i) {
        element = document.getElementsByClassName(this.tabName[i]).item(0) as HTMLElement;
        if (i === 1) {
          element.style.right = '30px';
          element.style.left = '930px'
         }
        else {
          element.style.right = '0';
          element.style.left = '960px'; 
        }
      }
    }
    this.previousTab = newTab;
  }
}
