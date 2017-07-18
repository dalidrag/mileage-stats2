import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
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
  tabPositions: string[] = ['l', 'r', 'r'];
  windowResized: boolean;
  
  sub;
  unsubscribeStore;

  constructor(@Inject('AppStore') private appStore, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //subscribe to Redux store state changes
    this.unsubscribeStore = this.appStore.subscribe(() => {
      let state = this.appStore.getState();
      this.windowResized = state.windowResized.windowResized;
      if (this.windowResized) {
        console.log('Drawing tabs...');
        this.arrangeTabs(this.getTabIndexFromRoute());
      }
    });

    // arange tabs reading the actual route
    this.arrangeTabs(this.getTabIndexFromRoute());

    // and on every route change repeat the same
    this.sub = this.router.events.subscribe((val) => {
         if (val instanceof NavigationEnd) {  // if succesful navigation happened
           this.arrangeTabs(this.getTabIndexFromRoute());
         }
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.unsubscribeStore();
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
    
    // Move to the left tabs that should be moved to left
    // Which ones is decided from the indexes of currently selected and newly selected tabs
    if (newTab > this.previousTab) {
      for (let i = this.previousTab + 1; i <= newTab; ++i) 
        this.tabPositions[i] = 'l';
    }
    // Or move to the right tabs that should be moved to the right
    else if (this.previousTab > newTab) {
      for (let i = newTab + 1; i <= this.previousTab; ++i) 
        this.tabPositions[i] = 'r';
    }

    this.drawSliders();

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
   * Moves accordion sliders on theirs place
   *
   * @method drawSliders
   */
   drawSliders() {
     let element: HTMLElement;
     let widescreen = window.matchMedia('screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape)');
     let smallerScreen = window.matchMedia('screen and (min-width:1081px) and (max-width: 1280px)');
     let smallScreen = window.matchMedia('screen and (max-width: 1080px)');
     let smallestScreen = window.matchMedia('screen and (max-width: 786px)');

     element = document.getElementsByClassName(this.sliderName[1]).item(0) as HTMLElement; // So that compiler doesn't yell
     if (this.tabPositions[1] === 'l') {
       if (element) {
         if (smallestScreen.matches) {
           element.style.top = '2rem';
           element.style.left = '0rem';
         }
         else if (smallerScreen.matches) {
           element.style.left = '2.5rem'
           element.style.top = '0rem';
         }
         else if (smallScreen.matches) {
           element.style.left = '2rem'; 
           element.style.top = '0rem';
         }
         else {
           element.style.left = '2vw'; 
           element.style.top = '0rem';
         }
       }
     }
     else {
       if (element) {
         if (smallestScreen.matches) {
           element.style.top = '86rem';
           element.style.left = '0rem';
         }
         else if (widescreen.matches) {
           element.style.left = '51vw';
           element.style.top = '0rem';
         }
         else if (smallerScreen.matches) {
           element.style.left = '68.5vw';
           element.style.top = '0rem';
         }
         else if (smallScreen.matches) {
           element.style.left = '23rem';
           element.style.top = '0rem';
         }
         else {
           element.style.left = '61vw';
           element.style.top = '0rem';
         }
       }
     }
     element = document.getElementsByClassName(this.sliderName[2]).item(0) as HTMLElement; // So that compiler doesn't yell
     if (this.tabPositions[2] === 'l') {
       if (element) {
          if (smallestScreen.matches) {
            element.style.top = '4rem';
            element.style.left = '0rem';
          }
          else if (smallerScreen.matches) {
            element.style.left = '5rem'; 
            element.style.top = '0rem';
          }
          else if (smallScreen.matches) {
            element.style.left = '4rem';
            element.style.top = '0rem';
          }
          else {
            element.style.left = '4vw';
            element.style.top = '0rem';
          }
       }
     }
     else {
       if (element) {
         if (smallestScreen.matches) {
           element.style.top = '88rem';
           element.style.left = '0rem';
         }
         else if (widescreen.matches) {
           element.style.left = '53vw';
           element.style.top = '0rem';
         }
         else if (smallerScreen.matches) {
           element.style.left = '72vw';
           element.style.top = '0rem';
         }
         else if (smallScreen.matches) {
           element.style.left = '25rem';
           element.style.top = '0rem';
         }
         else {
           element.style.left = '63vw';
           element.style.top = '0rem';
         }
       }
     } 
   }  // End of method

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
