import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthGuard } from "../components/auth/auth.guard";

@Injectable({
  providedIn: 'root'
})
export class CreateUserService{
  private baseUrl= 'http://localhost:8085';
  constructor(private http : HttpClient , private authService : AuthGuard){}
  token = this.authService.getToken();
  createUser(user: Object):Observable<Object>{
    console.log(this.authService.getToken());
      return this.http.post(`${this.baseUrl}/register-user`,user , {headers: new HttpHeaders().set("Authorization", "Bearer "+this.token)});

}
}
