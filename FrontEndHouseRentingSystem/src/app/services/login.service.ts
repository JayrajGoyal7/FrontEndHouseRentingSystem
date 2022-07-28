import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  login(data:any):Observable<any>{
    
    return this.http.post("http://localhost:9090/api/v1/auth/login",data);
  }


  loginUserAfterToken(token:any){
    localStorage.setItem("token", token)
    // put the role authentication here for page retrival
    // !!!
    // !!!
    // !!!
    // !!!
    return true;
  }

  UserIsLoggedIn(){
    let token =  localStorage.getItem("token");
    if(token==null || token=='' || token==undefined){
      return false;
    }else{
      return true;
    }
  }

  UserLoggedOut(){
    let token = localStorage.removeItem('token');
    location.reload()
    return true;
  }
}
