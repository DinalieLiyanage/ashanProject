import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserDAO } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  user: UserDAO;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.user = new UserDAO();
  }

  login() {
    console.log("IN LOGIN");
    this.loginService.getCreator(this.username).subscribe(
      ()=>{
        alert('Login successfull');
      },
      ()=>{
        alert('Login Error');
      }
    )
  }


}
