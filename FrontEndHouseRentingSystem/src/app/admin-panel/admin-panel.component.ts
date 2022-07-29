import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { AdminControlService } from '../services/admin-control.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  userDetails?: any;


  constructor(private adminControl:AdminControlService) {
    this.getUserDetails();
   }

  ngOnInit(): void {
  }


  getUserDetails(){
    this.adminControl.getUsers().subscribe(response=>{
      this.userDetails=response;
    },error=>{
      console.log("Error in fetching user details from database.");
      
    });
  }
}
