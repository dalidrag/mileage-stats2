import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment, NavigationEnd }   from '@angular/router';

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
export class AccordionComponent implements OnInit, OnDestroy {
	previousTab: number = 0;
	sliderName: string[] = ['', 'slider-fill-ups', 'slider-reminders'];

  sub

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
     this.arrangeTabs(this.getTabIndexFromRoute());

     this.sub = this.router.events.subscribe((val) => {
         if (val instanceof NavigationEnd) {  // if succesful navigation happened
           this.arrangeTabs(this.getTabIndexFromRoute());
         }
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  basicCarDataClicked(): void {
    this.router.navigate(['./'], { relativeTo: this.route });
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
    let widescreen = window.matchMedia('screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape)');

    // Move to the left tabs that should be moved to left
    // Which ones is decided from the indexes of currently selected and newly selected tabs
    if (newTab > this.previousTab) {
      for (let i = this.previousTab + 1; i <= newTab; ++i) {
        element = document.getElementsByClassName(this.sliderName[i]).item(0) as HTMLElement; // So that compiler doesn't yell
        if (i === 1)
          element.style.left = '2vw'; 
        else
          element.style.left = '4vw';
      }
    }
    // Or move to the right tabs that should be moved to the right
    else if (this.previousTab > newTab) {
      for (let i = newTab + 1; i <= this.previousTab; ++i) {
        element = document.getElementsByClassName(this.sliderName[i]).item(0) as HTMLElement; // So that compiler doesn't yell
        if (i === 1) {
          if (element)
            if (widescreen.matches) element.style.left = '51.5vw';
            else element.style.left = '61vw';
        }
        else {
            if (widescreen.matches) element.style.left = '53.5vw';
            else element.style.left = '63vw';
        } 
      }
    }
    //  Hide accordion content while slides are moving (for 0.7 seconds)
    if (this.previousTab !== undefined && this.previousTab != newTab) {
      element = document.getElementsByClassName('slider-info').item(0) as HTMLElement;
        element.style.display = 'none';  
        setTimeout(() => {
          element.style.display = 'block';
        }, 700);
    }
    this.previousTab = newTab;
  }

  /**
     * Returns the index of accordion tab from the selected routes
     *
     * @method getTabIndexFromRoute
     * @return {number}  The index of selected tab
     */
    getTabIndexFromRoute(): number { 
      let childRouteUrl: UrlSegment[] = this.route.snapshot.firstChild.url; // either fillups or reminders or edit car
      if (!childRouteUrl[0])
        return 0
      else if (childRouteUrl[0].toString() === 'editCar')  // if first url segment is 'editCar'
        return 0                      // tab 0 is selected
      else if (childRouteUrl[0].toString() === 'fillUps')  // if first url segment is 'fillups'
        return 1                      // then tab 1 is active
      else
        return 2                      // else tab 2
    }
}
