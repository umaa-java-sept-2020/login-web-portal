import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { ResetPasswordService } from 'src/app/services/resetPassword.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  hide1: boolean = false;
  hide2: boolean = true;
  loginModel: Login = new Login();
  confirmPassword : string = "";
  // userName : string ="" ;
  constructor( private resetPasswordService : ResetPasswordService,private router :Router , private route :ActivatedRoute) { }
  ngOnInit(): void {
    this.loginModel = new Login();
    this.loginModel.username = this.route.snapshot.params['userName'];
    // this.loginModel.resetPasswordToken = localStorage.getItem('token');
    this.loginModel.resetPasswordToken =this.route.snapshot.params['token'];

  }

  hideDiv(){
      this.hide1 = true;
      this.hide2 = false;
  }
  resetPassword() {
    {
      this.resetPasswordService.resetPassword(this.loginModel).subscribe((data : any  ) => {
        console.log(data);

        localStorage.removeItem('token');
        this.router.navigate(["/login"])
      },error  =>
        console.error(error.error.message+" "+error.error.details)
      );

  }

  }
}
