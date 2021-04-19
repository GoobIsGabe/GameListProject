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

  //INTERFACE
  showSuccess=false;
  showFailed=false;

  //For two-way data binding on form
  userNAME:string = "";
  userPASS:string = "";
  userEMAIL:string = "";
  userNICKNAME:string= "";
  
  
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
  
 
  updateUser(){
    if(this.userNAME=="" || this.userPASS=="" || this.userEMAIL=="" || this.userNICKNAME==""){
      this.showFailed=true;
      this.showSuccess=false;
    }
    else {
    this.userData.username=this.userNAME;
    this.userData.password=this.userPASS;
    this.userData.email=this.userEMAIL;
    this.userData.nickname=this.userNICKNAME;
    this.showSuccess=true;
    this.showFailed=false;
    }
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
