import { Component, OnInit } from '@angular/core';
import { updateNamespaceExportDeclaration } from 'typescript';
import { AuthenticateService } from '../authenticate.service';
import { LoginComponent } from '../login/login.component';
import { User } from '../user';
import { Game } from '../game';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //User Data
  public userData: User | any = [];
  public NICKNAME = ""
  public USERNAME = ""
  public ABOUT = ""
  public EMAIL = ""
  public TYPE = ""

  //Game Data
  public gameData : Game | any = [];
  public NAME = ""
  public PLATFORM = ""
  public PROGRESS = ""
  public STARTED = new Date()
  public THOUGHTS = ""

  public show: boolean = false;
  public buttonName: any = 'Show';
  constructor(private auth: AuthenticateService, private login: LoginComponent) { }

  ngOnInit(): void {
    this.userData = this.auth.getData();
    this.NICKNAME = this.userData.nickname;

    this.USERNAME = this.userData.username;
    this.ABOUT = this.userData.about;
    this.EMAIL = this.userData.email;
    this.TYPE = this.userData.userType;

    this.NAME = this.gameData.gamename;
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
