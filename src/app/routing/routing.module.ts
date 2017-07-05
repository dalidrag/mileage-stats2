import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CarCardsComponent} from '../dashboard/car-cards/car-cards.component';
import { AddCarComponent } from '../add-car/add-car.component';

import { CarsDataResolve } from './cars-data-resolver';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: CarCardsComponent },
    { path: 'addCar', component: AddCarComponent, resolve: { cars: CarsDataResolve } }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CarsDataResolve],
  exports: [ RouterModule ]
})
export class RoutingModule { }
