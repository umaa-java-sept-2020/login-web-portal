import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService{
  private baseUrl= 'http://localhost:8085';
  constructor(private http : HttpClient){}

  resetPassword(resetPass: Object):Observable<Object>{
      return this.http.post(`${this.baseUrl}/open-login/reset-system-password`,resetPass ,
       {responseType:'text' });

}
}
