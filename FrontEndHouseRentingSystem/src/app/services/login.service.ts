import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { User } from '../classes/user';
import { OwnerPanelComponent } from '../owner-panel/owner-panel.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http: HttpClient,private router:Router) { }


  // Registration service
  login(data:any):Observable<any>{
 
    return this.http.post("http://localhost:9090/api/v1/auth/login",data);
  }

  loginUserAfterToken(token:any){
    localStorage.setItem("token", token)
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

  ReturnOwnerPage(token:any){
    localStorage.setItem("token", token)
    window.location.href='/owner'

  }

  ReturnAdminPage(token:any){
    localStorage.setItem("token", token)
    window.location.href='/admin'
  }
}
