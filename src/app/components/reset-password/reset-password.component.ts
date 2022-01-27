import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  hide1: boolean = false;
  hide2: boolean = true;
  loginModel: Login = new Login();
  // confirmPassword : string = "";

  constructor() { }
  ngOnInit(): void {
  }

  hideDiv(){
      this.hide1 = true;
      this.hide2 = false;
  }
  resetPassword() {

  }

}
