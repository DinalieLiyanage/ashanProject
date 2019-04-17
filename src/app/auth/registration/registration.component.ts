import { Component, OnInit } from '@angular/core';
import { UserDAO, IUserDAO } from 'src/app/models/user.model';


import { RegisterService } from 'src/app/services/register.service';
import { RegisterMessage } from 'src/app/models/registerMessage.module';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LOGIN_ALREADY_USED_TYPE, EMAIL_ALREADY_USED_TYPE } from '../constants/error.constants';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: any;
  public name: string;
  public message: RegisterMessage;
  isSaving: boolean;
  public activation: boolean;
  success: boolean;

  f : any;

  public imagePath;
  imgURL: any;
  public message1: string;


  confirmPassword: string;
  doNotMatch: string;
  error: string;
  errorEmailExists: string;
  errorUserExists: string;
  registerAccount: any;

  constructor(private regService: RegisterService) { }




  ngOnInit() {
    this.user = new UserDAO();
   // this.user = {};

  }


  /*save() {
    this.subscribeToSaveResponse(this.regService.create(this.user));

  }*/

  save() {

    this.regService.create(this.user).subscribe(
      () => {
        console.log("saved successfuly");
        this.success = true;
      },
      response => this.processError(response)
    );

  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IUserDAO>>) {
    result.subscribe((res: HttpResponse<IUserDAO>) => this.onSaveSuccess(res), (res: HttpErrorResponse) => this.onSaveError(res));
  }



  private onSaveSuccess(res: any) {
    this.isSaving = false;
    // this.activation = res.
    console.log(res.body);


  }

  private processError(response: HttpErrorResponse) {

    

    console.log('This is message      ' + response.error.message);
    console.log('This is status      ' + response.error.status);

    var index1 = response.error.message.localeCompare('already_used_username');
    var index2 = response.error.message.localeCompare('already_used_email');
    this.success = null;
   /* if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
      this.errorUserExists = 'ERROR';
    } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
      this.errorEmailExists = 'ERROR';
    } else {
      this.error = 'ERROR';
    }*/

    if (response.status === 400 && !index1) {
      console.log('Username already exists');
    } else if (response.status === 400 && !index2) {
      console.log('Email already exists');
    } else {
      console.log("Server error");
    }
  }

  private onSaveError(res) {
    this.isSaving = false;
    console.log(res.message);

    if (res.status === 400 && res.error.type === LOGIN_ALREADY_USED_TYPE) {
      console.log("Username already exists");
    } else if (res.status === 400 && res.error.type === EMAIL_ALREADY_USED_TYPE) {
      console.log("Email already exists");
    } else {
      console.log("Server error");
    }
    
  }


  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message1 = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }



}
