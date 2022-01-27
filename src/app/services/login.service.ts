import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private baseUrl= 'http://localhost:8085/';
  constructor(private http : HttpClient){}

  login(login: Object):Observable<Object>{
      return this.http.post(`${this.baseUrl}/open-login/authenticate`,login)
  }
}
