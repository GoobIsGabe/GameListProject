import { Component, OnInit } from '@angular/core';
import { updateNamespaceExportDeclaration } from 'typescript';
import { AuthenticateService } from '../authenticate.service';
import { LoginComponent } from '../login/login.component';
import { User } from '../user';
import { Game } from '../game';

import { DatePipe } from '@angular/common';

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
  public gameData: Game | any = [];
  public NAME = ""
  public PLATFORM = ""
  public PROGRESS = ""
  public STARTED = new Date()
  public THOUGHTS = ""

  //Favourite being the game inline with user
  public TOPFAVOURITE = ""
  public TOPSTARTED = new Date().toLocaleDateString()

  public show: boolean = false;
  public buttonName: any = 'Show';
  constructor(private auth: AuthenticateService, private login: LoginComponent) { }

  ngOnInit(): void {
    this.userData = this.auth.getData();
    this.gameData = this.auth.getData();
    this.NICKNAME = this.userData.nickname;

    this.USERNAME = this.userData.username;
    this.ABOUT = this.userData.about;
    this.EMAIL = this.userData.email;
    this.TYPE = this.userData.userType;

    this.PLATFORM = this.userData.games.gameplatform;
    this.PROGRESS = this.userData.games.progress;
    this.THOUGHTS = this.userData.games.thoughts;
    this.STARTED = this.userData.games.started;


    //logic for if a user doesn't have a favourite game
    try {
      this.TOPFAVOURITE = this.userData.games[0].gamename;
      this.TOPSTARTED = this.userData.games[0].started;
    }
    catch (e) {
      e.message // errors
      this.TOPFAVOURITE = "This user doesn't have a favourite game";
      this.TOPSTARTED = "N/A";
    }


    const datepipe: DatePipe = new DatePipe('en-US');
    console.log(this.userData.games[0].started);
    this.TOPSTARTED = this.userData.games[0].started;

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
