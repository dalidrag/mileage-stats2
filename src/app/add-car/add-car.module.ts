import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddCarButtonComponent } from './add-car-button/add-car-button.component';
import { AddCarComponent } from './add-car.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [AddCarComponent, AddCarButtonComponent],
  exports: [AddCarButtonComponent]
})
export class AddCarModule { }
