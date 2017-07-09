import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';

import { AddCarModule } from '../add-car/add-car.module';

import { CarCardsComponent } from './car-cards/car-cards.component';
import { CarCardComponent } from './car-card/car-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AddCarModule
  ],
  declarations: [
	  CarCardComponent,
  	CarCardsComponent
  ],
  exports: [
	  CarCardComponent,
  	CarCardsComponent
  ]
})
export class DashboardModule { }
