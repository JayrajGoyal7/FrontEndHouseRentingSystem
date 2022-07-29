import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnerPanelService {

  constructor(private http:HttpClient) { }


  OwnerLogin(){
    return this.http.get("");
  }
}