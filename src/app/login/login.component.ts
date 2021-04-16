import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData:any={}

  constructor(private _auth:AuthenticateService) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.userData)
    console.log(this.userData.username)
    // this._auth.loginUser(this.userData).subscribe(
    // res => console.log("success "+res),
    // err => console.log("failed "+err))
    
  }
 
}
