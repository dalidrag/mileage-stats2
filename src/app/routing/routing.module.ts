import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CarCardsComponent} from '../dashboard/car-cards/car-cards.component';

import { AddCarComponent } from '../add-car/add-car.component';

import { AccordionComponent } from '../car-detail/accordion/accordion.component';
import { BasicCarDataComponent } from '../car-detail/basic-car-data/basic-car-data.component';
import { FillUpsComponent } from '../car-detail/fill-ups/fill-ups.component';
import { FillUpDetailComponent } from '../car-detail/fill-ups/fill-up-detail/fill-up-detail.component';
import { AddFillUpComponent } from '../car-detail/fill-ups/add-fill-up/add-fill-up.component';
import { RemindersComponent } from '../car-detail/reminders/reminders.component';

import { CarsDataResolve } from './cars-data-resolver';
import { CarDataResolve } from './car-data-resolver';
import { FillUpsDataResolve } from './fill-ups-data-resolver';
import { FillUpDataResolve } from './fill-up-data-resolver';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: CarCardsComponent },
    { path: 'addCar', component: AddCarComponent, resolve: { cars: CarsDataResolve } },
     { path: 'carDetails/:carId', component: AccordionComponent, children: [
      {
        path: '',
        component: BasicCarDataComponent,
        resolve: {car: CarDataResolve}
      },
      {
        path: 'basicCarData',
        component: BasicCarDataComponent,
        resolve: {car: CarDataResolve}
      },
      {
        path: 'fillUps',
        component: FillUpsComponent,
        resolve: { fillUps: FillUpsDataResolve, car: CarDataResolve },
        children: [
          {
            path: 'addFillUp',
            component: AddFillUpComponent
          },
          {
            path: ':id',
            component: FillUpDetailComponent,
            resolve: { fillUp: FillUpDataResolve }
          }
        ]
      },
      {
        path: 'reminders',
        component: RemindersComponent
      }
      ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CarsDataResolve, CarDataResolve, FillUpsDataResolve, FillUpDataResolve],
  exports: [ RouterModule ]
})
export class RoutingModule { }
