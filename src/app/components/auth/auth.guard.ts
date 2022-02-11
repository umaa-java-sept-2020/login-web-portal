import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "src/app/services/login.service";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router :Router, private loginService : LoginService){}
  canActivate(route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      console.log("token");
      const token = sessionStorage.getItem('token');
      const bearerToken:any = sessionStorage.getItem('BearerToken');
      console.log("BearerToken",bearerToken);

      console.log(token,"token");

    if((token!= null) || (bearerToken!=null))
    {
      const helper = new JwtHelperService();
      console.log(helper);
      
      if(helper.isTokenExpired(bearerToken))
      {
        this.router.navigate(['/login']);
        console.warn("Session expired! Please login again");
        return false;
      }
      else
        return true;
    }
    else{
      console.warn("Please login to continue...");
      this.router.navigate(['/login'])
    }
    // if()
  return true;
}

  }


