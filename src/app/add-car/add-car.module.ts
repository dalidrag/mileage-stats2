import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ImageCropperModule } from 'ng2-img-cropper';

import { AddCarButtonComponent } from './add-car-button/add-car-button.component';
import { AddCarComponent } from './add-car.component';


/**
 * Shows add car screen
 *
 * @module AddCarModule
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    ImageCropperModule
  ],
  declarations: [AddCarComponent, AddCarButtonComponent],
  exports: [AddCarButtonComponent]
})
export class AddCarModule { }
