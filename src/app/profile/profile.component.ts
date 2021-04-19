import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { LoginComponent } from '../login/login.component';
import { User } from '../user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   //User Data
   public userData:User|any = [];
  public NICKNAME=""
  public USERNAME=""
   

  public show:boolean = false;
  public buttonName:any = 'Show';
  constructor(private auth: AuthenticateService, private login: LoginComponent) { }

  ngOnInit(): void {
    this.userData = this.auth.getData();
   this.NICKNAME = this.userData.nickname;
  
  this.USERNAME = this.userData.username;
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
