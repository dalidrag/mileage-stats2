import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CarCardsComponent} from '../dashboard/car-cards/car-cards.component';
import { AddCarComponent } from '../add-car/add-car.component';
import { ChromeComponent } from '../chrome/chrome.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { AuthComponent } from '../auth/auth.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';

import { AccordionComponent } from '../car-detail/accordion/accordion.component';
import { BasicCarDataComponent } from '../car-detail/basic-car-data/basic-car-data.component';
import { FillUpsComponent } from '../car-detail/fill-ups/fill-ups.component';
import { FillUpDetailComponent } from '../car-detail/fill-ups/fill-up-detail/fill-up-detail.component';
import { AddFillUpComponent } from '../car-detail/fill-ups/add-fill-up/add-fill-up.component';
import { EditFillUpComponent } from '../car-detail/fill-ups/edit-fill-up/edit-fill-up.component';
import { RemindersComponent } from '../car-detail/reminders/reminders.component';
import { AddReminderComponent } from '../car-detail/reminders/add-reminder/add-reminder.component';
import { EditReminderComponent } from '../car-detail/reminders/edit-reminder/edit-reminder.component';
import { EditCarComponent } from '../car-detail/basic-car-data/edit-car/edit-car.component';

import { CarDetailViewComponent } from '../car-detail-view/car-detail-view.component';

import { ProfileComponent } from '../auth/profile/profile.component';

import { CarsDataResolve } from './cars-data-resolver';
import { CarDataResolve } from './car-data-resolver';
import { FillUpsDataResolve } from './fill-ups-data-resolver';
import { FillUpDataResolve } from './fill-up-data-resolver';
import { RemindersDataResolve } from './reminders-data-resolver';
import { ReminderDataResolve } from './reminder-data-resolver';
import { AllFillUpsDataResolve } from './all-fill-ups-resolver';
import { AllRemindersDataResolve } from './all-reminders-data-resolve.service';
import { UserDataResolve } from './user-data-resolve.service';

import { AuthGuard } from './auth.guard';
import { SignedInGuard } from './signed-in.guard';

const routes: Routes = [
    { path: 'landing', component: AuthComponent,
      canActivate: [SignedInGuard], canActivateChild: [SignedInGuard],
      children: [
        { path: 'signIn', component:SignInComponent },
        { path: 'signUp', component:SignUpComponent }
      ]
    },
    { path: '', component: ChromeComponent,
      canActivate: [AuthGuard], canActivateChild: [AuthGuard],
      children: [
      { path: 'profile', component: ProfileComponent, resolve: {user: UserDataResolve} },
      { path: 'dashboard', component: DashboardComponent, resolve: { user: UserDataResolve, cars: CarsDataResolve, fillUps: AllFillUpsDataResolve, reminders: AllRemindersDataResolve } },
      { path: 'addCar', component: AddCarComponent, resolve: { cars: CarsDataResolve } },
      { path: 'carDetails/:carId', component: CarDetailViewComponent,
        resolve: { cars: CarsDataResolve, fillUps: FillUpsDataResolve },
        children: [
       {
         path: '',
         component: BasicCarDataComponent,
         resolve: {car: CarDataResolve, fillUps: FillUpsDataResolve, reminders: RemindersDataResolve }
       },
       {
         path: 'editCar',
         component: EditCarComponent,
         resolve: {cars: CarsDataResolve}
       },
       {
         path: 'fillUps',
         component: FillUpsComponent,
         resolve: { fillUps: FillUpsDataResolve, car: CarDataResolve },
         children: [
           {
             path: 'addFillUp',
             component: AddFillUpComponent,
             resolve: { car: CarDataResolve }
           },
           {
             path: ':id/editFillUp',
             component: EditFillUpComponent,
             resolve: { fillUp: FillUpDataResolve, car: CarDataResolve }
           },
           {
             path: ':id',
             component: FillUpDetailComponent,
             resolve: { fillUp: FillUpDataResolve, car: CarDataResolve }
           }
         ]
        },
       {
         path: 'reminders',
         component: RemindersComponent,
         resolve: { reminders: RemindersDataResolve, car: CarDataResolve },
         children: [
         {
           path: 'addReminder',
           component: AddReminderComponent,
           resolve: { car: CarDataResolve }
         },
         {
           path: ':id/editReminder',
           component: EditReminderComponent,
           resolve: { reminder: ReminderDataResolve, car: CarDataResolve }
         }
         ]
       }
      ]
     }
     ]
   }
];

/**
 * Contains application routing data
 *
 * @module RoutingModule
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CarsDataResolve,
    CarDataResolve,
    FillUpsDataResolve,
    FillUpDataResolve,
    RemindersDataResolve,
    ReminderDataResolve,
    AllFillUpsDataResolve,
    UserDataResolve,
    AllRemindersDataResolve,
    AuthGuard,
    SignedInGuard
   ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
