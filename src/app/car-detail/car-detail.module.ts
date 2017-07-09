import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionComponent } from './accordion/accordion.component';
import { FillUpsComponent } from './fill-ups/fill-ups.component';
import { BasicCarDataComponent } from './basic-car-data/basic-car-data.component';
import { RemindersComponent } from './reminders/reminders.component';
import { FillUpsListComponent } from './fill-ups/fill-ups-list/fill-ups-list.component';
import { FillUpsListEntryComponent } from './fill-ups/fill-ups-list/fill-ups-list-entry/fill-ups-list-entry.component';
import { FillUpDetailComponent } from './fill-ups/fill-up-detail/fill-up-detail.component';
import { AddFillUpComponent } from './fill-ups/add-fill-up/add-fill-up.component';
import { RemindersListComponent } from './reminders/reminders-list/reminders-list.component';
import { RemindersListEntryComponent } from './reminders/reminders-list/reminders-list-entry/reminders-list-entry.component';
import { AddReminderComponent } from './reminders/add-reminder/add-reminder.component';
import { EditFillUpComponent } from './fill-ups/edit-fill-up/edit-fill-up.component';
import { EditReminderComponent } from './reminders/edit-reminder/edit-reminder.component';
import { EditCarComponent } from './basic-car-data/edit-car/edit-car.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [AccordionComponent, FillUpsComponent, BasicCarDataComponent, RemindersComponent, FillUpsListComponent, FillUpsListEntryComponent, FillUpDetailComponent, AddFillUpComponent, RemindersListComponent, RemindersListEntryComponent, AddReminderComponent, EditFillUpComponent, EditReminderComponent, EditCarComponent],
  exports: [AccordionComponent]
})
export class CarDetailModule { }
