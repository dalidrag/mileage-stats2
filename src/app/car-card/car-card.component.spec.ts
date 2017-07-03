import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data-service';

import { CarCardComponent } from './car-card.component';

describe('CarCardComponent', () => {
  let component: CarCardComponent;
  let fixture: ComponentFixture<CarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
       HttpModule,
       InMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      declarations: [ CarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display a wrapper <div> of carCard class', () => {
    let dbg: DebugElement;

    dbg = fixture.debugElement.query(By.css('div .carCard'));
    expect(dbg).toBeTruthy();
  });

  it('should nest a div of .header class in a <div> of carCard class', () => {
    let dbg: DebugElement;
    let element: HTMLElement;

    dbg = fixture.debugElement.query(By.css('.carCard'));
    element = dbg.nativeElement;

    expect(element.getElementsByTagName("div")[0].className).toBe('header');
  });

  describe('header div', () => {
    it('should contain text "Hot Rod"', (done) => {
      let dbg: DebugElement;
      let element: HTMLElement;

      dbg = fixture.debugElement.query(By.css('.header'));
      element = dbg.nativeElement;

      let loop = window.setInterval(()=>{
        if (fixture.componentInstance.carName !== undefined) {
          window.clearInterval(loop);
          fixture.detectChanges();
          expect(element.textContent).toContain('Hot Rod');
          done();
        }
      }, 50);
    });
  });
});
