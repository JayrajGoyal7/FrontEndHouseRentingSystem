import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //base url to get the token 
  url="http://localhost:9090/api";
  constructor(private http:HttpClient) { }


  //calling the sever to generate the token.
  generateToken(credentials:any)
  {
      return this.http.post(`${this.url}/v1/auth/login`,credentials);
  }



  //login in the user with the token
  loginUSer(token: string){
    localStorage.setItem("token", token)
    return true;
  }
//check if the user is logged in or not.
  isLoggedIn(){
      let token= localStorage.getItem("token");
      if(token==undefined  || token=='' || token==null)
      {
        return false;
      }else
      {
        return true;
      }
  }
  //afor logout the user.
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  //for getting the token.
  getToken(){
    return localStorage.getItem("token")
  }
}
