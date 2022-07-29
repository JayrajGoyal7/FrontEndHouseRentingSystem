import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User();
  
  constructor(private registrationServcice:RegistrationService) { }
 
  ngOnInit(): void {
  }

  
  RegisterUser(){
    this.registrationServcice.createUser(this.user).subscribe(data=>
      { 
        alert("SignUp successfully..! Click ok for login.")
        window.location.href='/'
      console.log("Resposne received.")

    },error=>
       console.log(this.user)
       
    );
  }
}
