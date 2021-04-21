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
  }

searchUser(){
  for(let i=0; i<this.uData.length;i++){
    if((this.userNAME == this.uData[i].username)){
      this.showSearched = true;
      this.showFailed = false;
      console.log("SUCCESS");
      console.log(this.uData[i]);
      // this.auth.setData(this.userData[i]);
      this.nickname = this.uData[i].nickname;
      this.userNAME = this.uData[i].userNAME;
      this.about = this.uData[i].about;
      this.email = this.uData[i].email;
      this.type = this.uData[i].type;
      for(let j=0; j<this.uData[i].games.length;j++){
      this.gData[j] = this.uData[i].games[j];
      
      console.log(this.gData);
      console.log(this.uData[i].games[j]);
    }

      try {
        this.topfavourite = this.uData[i].games[0].gamename;
        this.topstarted = this.uData[i].games[0].started;
      }
      catch (e) {
        e.message // errors
        this.topfavourite = "This user doesn't have a favourite game";
        this.topstarted = "N/A";
      }
     // console.log(this.uData[i].games[0]);
      // this.gData[i]=this.uData[i].games;
      // console.log(this.gData[i]);
      // console.log(this.uData[i].games.gamename);
    }
    else{
    // this.showFailed = true;
     //this.showSearched = false;
    }
  }
}
back(){
  this.route.navigate(['home'])
}

public showSearched = false;
public showFailed = false;
}
