import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { Ng2ImgMaxModule, Ng2ImgMaxService } from 'ng2-img-max';
import { ImageViewerModule } from 'ngx-image-viewer';
const routes = [{
  path: '',
  component: UploadComponent
}];

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ImageViewerModule.forRoot(),
    ImageCropperModule,
    Ng2ImgMaxModule
  ]
})
export class UploadModule {

  
  
  }
