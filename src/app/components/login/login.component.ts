import { HttpHeaders, HttpResponse } from '@angular/common/http';
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
//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json'
//     }),
//     observe: 'response'
// };

  login()
  {
    this.loginService.login(this.loginModel).subscribe((data : any  ) => {
      console.log(data);
      this.loginModel = new Login();
      // console.log("response: ", data.headers("resetPasswordToken"));
      // localStorage.setItem('token',data.headers("resetPasswordToken"));
      // const token = localStorage.getItem('token');
      // var token = data.headers.get('resetPasswordToken');
      console.log(data.headers.has('HttpHeaders'));
      var token  = JSON.stringify( data.headers.get('resetPasswordToken'));
      console.log("Token : ",token);

      // this.router.navigate(["/reset-password"])
    },error  =>
      console.error(error.error.message+" "+error.error.details)
    );
  }

}
