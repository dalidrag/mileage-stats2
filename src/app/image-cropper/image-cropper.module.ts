import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCropperComponent } from 'ng2-img-cropper';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageCropperComponent],
  exports: [ImageCropperComponent]
})
export class ImageCropperModule { }
