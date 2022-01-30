import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "src/app/services/login.service";
import { JwtHelperService } from '@auth0/angular-jwt';

export class AuthGuard implements CanActivate{
  constructor(private router :Router, private loginService : LoginService){}
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = localStorage.getItem('token');
    if(token!= null){
      const helper = new JwtHelperService();
      if(helper.isTokenExpired(token)){
        this.router.navigate(['/login']);
        console.warn("Session expired! Please login again");
        return false;

      }
      else
      return true;
    }
    else{
      console.warn("Please login to continue...");
      this.router.navigate(['/auth'])

    }
    // if()
  return true;
}

  }


