import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';

import { AccordionComponent } from './accordion/accordion.component';
import { FillUpsComponent } from './fill-ups/fill-ups.component';
import { BasicCarDataComponent } from './basic-car-data/basic-car-data.component';
import { RemindersComponent } from './reminders/reminders.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AccordionComponent, FillUpsComponent, BasicCarDataComponent, RemindersComponent]
})
export class CarDetailModule { }
