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

  public userData:User|any = [];
//added this if it broke change I guess
  userNAME:string = "";
  userPASS:string = "";
  userEMAIL:string = "";
  userNICKNAME:string= "";
  userABOUT:string="";


    //User Data
    public NICKNAME = "";
    public USERNAME = "";
    public ABOUT = "";
    public EMAIL = "";
    public USERID:number|any="";

  public show: boolean = false;
  public buttonName: any = 'Show';
  PASSWORD: any;
  constructor(private auth: AuthenticateService) { }
  ngOnInit(): void {
    this.userData = this.auth.getData();
    this.NICKNAME = this.userData.nickname;
    this.USERNAME = this.userData.username;
    this.ABOUT = this.userData.about;
    this.EMAIL = this.userData.email;
    this.PASSWORD = this.userData.password;
    this.USERID = this.userData.id;

  }
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
