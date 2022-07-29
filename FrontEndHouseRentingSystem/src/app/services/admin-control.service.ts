import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminControlService {

  constructor(private http:HttpClient) { }

  public getUsers(){
    return this.http.get("http://localhost:9090/api/users/");
  }
}
