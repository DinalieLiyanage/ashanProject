import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  uploadedImage: Blob;

 constructor(private ng2ImgMax: Ng2ImgMaxService,public sanitizer: DomSanitizer) { }

  ngOnInit() {


  }

  /*
  uploadedImage: Blob;
  imagePreview: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
   
  }
  
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }


  
    // tslint:disable-next-line:member-ordering
    public imagePath;
    imgURL: any;
    public message: string;
  
    preview(files) {
      if (files.length === 0)
        return;
  
      let mimeType = files[0].type;
      if (mimeType.match(/image\/) == null) {
    this.message = 'Only images are supported.';
    return;
  }

  let reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]);
  reader.onload = (_event) => {
    this.imgURL = reader.result;

  }}
*/

imageChangedEvent: any = '';
    croppedImage: any = '';
    
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        console.log(JSON.stringify(this.croppedImage));
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }


}
