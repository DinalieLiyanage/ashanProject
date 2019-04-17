import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';


@NgModule({


    imports: [
        CommonModule, RegistrationModule, LoginModule
    ],
    declarations: []
})
export class AuthorizingModule { }
