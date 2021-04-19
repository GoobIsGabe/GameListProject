import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component'
import { User } from '../user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  //User Data
  public userData: User | any = [];
  public NICKNAME = ""
  public USERNAME = ""
  public ABOUT = ""
  public EMAIL = ""
  


  public show: boolean = false;
  public buttonName: any = 'Show';
  constructor(private auth: AuthenticateService, private login: LoginComponent) { }

  // constructor() { }

  ngOnInit(): void {
    this.userData = this.auth.getData();
    this.NICKNAME = this.userData.nickname;
    this.USERNAME = this.userData.username;
    this.ABOUT = this.userData.about;
    this.EMAIL = this.userData.email;

  }

}
