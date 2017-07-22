import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddCarModule } from '../add-car/add-car.module';

import { CarCardsComponent } from './car-cards/car-cards.component';
import { CarCardComponent } from './car-card/car-card.component';
import { SummaryComponent } from './summary/summary.component';
import { SummaryStatComponent } from './summary/summary-stat/summary-stat.component';
import { OverdueRemindersComponent } from './summary/overdue-reminders/overdue-reminders.component';
import { CompleteRegistrationComponent } from './summary/complete-registration/complete-registration.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AddCarModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
	  CarCardComponent,
  	CarCardsComponent,
  	SummaryComponent,
  	SummaryStatComponent,
  	OverdueRemindersComponent,
  	CompleteRegistrationComponent,
  	DashboardComponent
  ],
  exports: [
	  CarCardComponent,
  	CarCardsComponent
  ]
})
export class DashboardModule { }
