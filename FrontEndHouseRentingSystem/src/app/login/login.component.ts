import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // getLoginCred = new GetLoginCred();
  formGroup: FormGroup | any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void{
    this.initForm();
    // this.getAccessToken(this.getLoginCred);
  }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  loginProcess(){
    if(this.formGroup?.valid){
      this.loginService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result.message +" , " +result.success);
          this.loginService.loginUserAfterToken(result.token);

          //this page is being showing after the token has been stored inside the local storage
          window.location.href="dashboard"
        }else{
          console.log(this.formGroup.username);
          console.log(this.formGroup.password);
          console.log("login component working perfectly.");
          
        }
      },error=>{console.log("Invalid username or password. (or the spring server has not been started yet.)");
      });
    }
  }

}


