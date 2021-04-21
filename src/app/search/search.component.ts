import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { User } from '../user';
import { Game } from '../game';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public uData:User|any = [];
  
  //searched user data
  public nickname = ""
  public userNAME = ""
  public about = ""
  public email = ""
  public type = ""
  public refuser =""

    //searched user Game Data
    public gData: Game | any = [];
    public name = ""
    public platform = ""
    public progress = ""
    public started = new Date()
    public thoughts = ""
    
    //Favourite being the game inline with user
  public topfavourite = ""
  public topstarted = new Date().toLocaleDateString()

  constructor(private auth: AuthenticateService, private route: Router) { }

  ngOnInit(): void {
    this.auth.getUsers()
    .subscribe((data:User[]) => {
      this.uData = data;
    });
    // this.uData = this.auth.getData();
    // this.gData = this.auth.getData();
    // this.nickname = this.uData.nickname;

    // this.USERNAME = this.userData.username;
    // this.ABOUT = this.userData.about;
    // this.EMAIL = this.userData.email;
    // this.TYPE = this.userData.userType;

    // this.PLATFORM = this.userData.games.gameplatform;
    // this.PROGRESS = this.userData.games.progress;
    // this.THOUGHTS = this.userData.games.thoughts;
    // this.STARTED = this.userData.games.started;


    // //logic for if a user doesn't have a favourite game
    // try {
    //   this.TOPFAVOURITE = this.userData.games[0].gamename;
    //   this.TOPSTARTED = this.userData.games[0].started;
    // }
    // catch (e) {
    //   e.message // errors
    //   this.TOPFAVOURITE = "This user doesn't have a favourite game";
    //   this.TOPSTARTED = "N/A";
    // }


    // const datepipe: DatePipe = new DatePipe('en-US');
    // console.log(this.userData.games[0].started);
    // this.TOPSTARTED = this.userData.games[0].started;

  }

searchUser(){
  for(let i=0; i<this.uData.length;i++){
    if((this.userNAME == this.uData[i].username)){
      console.log("SUCCESS");
      console.log(this.uData[i]);
      // this.auth.setData(this.userData[i]);
      this.nickname = this.uData[i].nickname;
      this.userNAME = this.uData[i].userNAME;
      this.about = this.uData[i].about;
      this.email = this.uData[i].email;
      this.type = this.uData[i].type;

      this.refuser = this.uData[i];

      try {
        this.topfavourite = this.uData[i].games[0].gamename;
        this.topstarted = this.uData[i].games[0].started;
      }
      catch (e) {
        e.message // errors
        this.topfavourite = "This user doesn't have a favourite game";
        this.topstarted = "N/A";
      }
      console.log(this.uData[i].games[0]);

    }
    else{
     
    }
  }
}
back(){
  this.route.navigate(['home'])
}

  

}
