import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "src/app/services/login.service";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) { }
  token :any= '';
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log("token");
    this.token = sessionStorage.getItem('token');
    // const bearerToken: any = sessionStorage.getItem('BearerToken');
    // console.log("BearerToken", bearerToken);

    console.log(this.token, "token");

    if (this.token != null) {
      const helper = new JwtHelperService();
      console.log(helper);
      if (this.token.startsWith("Bearer ")) {
        if (helper.isTokenExpired(this.token)) {
          this.router.navigate(['/login']);
          console.warn("Session expired! Please login again");
          return false;
        }
        else
          return true;
      }

      else
        return true;
    }

    else{
  console.warn("Please login to continue...");
  this.router.navigate(['/login'])
}
return true;
}
getToken(){
return this.token;
}

  }


