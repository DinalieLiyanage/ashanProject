import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from 'src/app/services/register.service';

const routes = [
  {
    path: 'registration',
    component: RegistrationComponent
  }
];


@NgModule({
  declarations: [RegistrationComponent],
  imports: [

    RouterModule.forChild(routes), ReactiveFormsModule, HttpClientModule, CommonModule, FormsModule
  ],
  providers: [RegisterService]

})
export class RegistrationModule { }
