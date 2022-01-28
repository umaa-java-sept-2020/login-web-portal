import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/Login';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginModel :Login = new Login();
  constructor( private loginService : LoginService,private router :Router) {}

  ngOnInit(): void {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    observe: 'response'
};

  login()
  {
    // this.loginService.login(this.loginModel).subscribe((data : any ) => {
    //   console.log(data);
    //   // this.loginModel = new Login();
    //   // console.log("response: ", data.headers.get("resetpasswordtoken"));

    //   this.loginModel = new Login();
    // },error =>
    //   console.error(error.error.message+" "+error.error.details)
    // );

    this.loginService.login(this.loginModel).subscribe( data =>{
      console.log("data :" ,data);

    }, error =>
      console.error(error.error.message+" "+error.error.details)

  );
  }

}
