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
  loginModel: Login = new Login();
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  login(userName: String) {
    this.loginService.login(this.loginModel).subscribe((data: any) => {
      console.log(data);
      if(!data.includes("bearer")){
        console.log("print");

        let token = "";
       token = data;
       sessionStorage.setItem('token', token);
      this.router.navigate(["/reset-password", userName, token])

      }
      if(data.includes("bearer")){
        let bearerToken = "";
         bearerToken = data.replace('bearer','');
        //  console.log(localStorage.getItem('token'),"+");
        //  console.log(localStorage.getItem('bearerToken'),"++");

      sessionStorage.setItem('bearerToken', bearerToken);
      // console.log(localStorage.getItem('token'),"-");
      //    console.log(localStorage.getItem('bearerToken'),"--");
      document.location.href = 'https://stackoverflow.com';

      }

    }, error =>
      console.error(error.error.message + " " + error.error.details)
    );

  }

}
