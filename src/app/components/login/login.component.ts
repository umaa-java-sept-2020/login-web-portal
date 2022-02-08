
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
      if (!data.includes("bearer")) {  // data = "0b8785f3-c567-4631-9640-5b431309a094"
        let token = "";
        token = data;
        sessionStorage.setItem('token', token);
        this.router.navigate(["/reset-password", userName, token])

      }
      if (data.startsWith("bearer")) { //returns data= "bearereyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ4MTIzNDciLCJleHAiOjE2NDM4OTY0MjksImlhdCI6MTY0Mzg3ODQyOX0.ZiTkd7f_XkKm4T9ChQCkyxqCI1y4wNvANYXql9WTtWiNORGm-XSrWvxeD4xGbwYYN0SmsXhINFkogRQSrGUHowbearereyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ4MTIzNDciLCJleHAiOjE2NDM4OTY0MjksImlhdCI6MTY0Mzg3ODQyOX0.ZiTkd7f_XkKm4T9ChQCkyxqCI1y4wNvANYXql9WTtWiNORGm-XSrWvxeD4xGbwYYN0SmsXhINFkogRQSrGUHow"
        let bearerToken = "";
        bearerToken = data.replace('bearer', '');
        console.log(bearerToken);   //"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ4MTIzNDciLCJleHAiOjE2NDM4OTY0MjksImlhdCI6MTY0Mzg3ODQyOX0.ZiTkd7f_XkKm4T9ChQCkyxqCI1y4wNvANYXql9WTtWiNORGm-XSrWvxeD4xGbwYYN0SmsXhINFkogRQSrGUHowbearereyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ4MTIzNDciLCJleHAiOjE2NDM4OTY0MjksImlhdCI6MTY0Mzg3ODQyOX0.ZiTkd7f_XkKm4T9ChQCkyxqCI1y4wNvANYXql9WTtWiNORGm-XSrWvxeD4xGbwYYN0SmsXhINFkogRQSrGUHow"

        sessionStorage.setItem('bearerToken', bearerToken);
        document.location.href = 'http://localhost:49371?token='+bearerToken;  //hiring event url
        // this.router.navigate(["/dashboard"])
        // this.router.navigate(["http://localhost:49400"]);



      }

    }, error =>
      console.error(error.error.message + " " + error.error.details)
    );
  }

}
