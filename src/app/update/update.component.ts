import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { User } from '../user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public userData:User|any = [];

  userNAME:string = "";
  userPASS:string = "";
  userEMAIL:string = "";
  userNICKNAME:string= "";

  // user = {
  //   "username": this.userNAME,
  //   "nickname":this.userNICKNAME,
  //   "email":this.userEMAIL,
  //   "password": this.userPASS
  // }

  //DATA
  public USERNAME="";
  public PASSWORD="";
  public EMAIL="";
  public NICKNAME="";
  public USERID:number|any="";

  constructor(private auth: AuthenticateService) { }

  ngOnInit(): void {
    this.userData = this.auth.getData();
    this.USERNAME = this.userData.username;
    this.PASSWORD = this.userData.password;
    this.EMAIL = this.userData.email;
    this.NICKNAME = this.userData.nickname;
    this.USERID = this.userData.id;
  }
  
  // handleNick(nick:any){
  //   this.userNAME=nick;
  // }
  updateUser(){
    console.log(this.userData)
   return this.auth.updateUser(this.USERID,this.userData)
    .subscribe(data =>{
      console.log("UPDATED SUCCESFULLY");
      console.log(data)
      console.log(this.userData.password)
      console.log(this.userData.email)
      console.log(this.userData.nickname)
    })
  }

}
