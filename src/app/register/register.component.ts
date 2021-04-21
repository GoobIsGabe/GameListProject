import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal]
})
export class RegisterComponent implements OnInit {
  //User Data
  public userData:User|any = {};
 
  //INPUT
  userNAME:string = "";
  userPASS:string = "";
  confirmPASS:string = "";
  eMAIL:string = "";
  nick:string = "";
  TYPE:string = "";
 
  
  //Interface
  public showProfile = false;
  public showRegister = true;
  public showDenied = false;
  public showPassFailed =false;
  public showEmailFailed =false;




  constructor(config: NgbModalConfig, private modalService: NgbModal, private auth: AuthenticateService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  //GETTING DATA FROM SERVER
  ngOnInit(): void {
  
  }
 
  createUser(){
    if( (this.userNAME != "") && (this.eMAIL != "") && (this.nick != "") && (this.userPASS != "") && (this.TYPE != "")){
      this.showDenied=false;
      this.showEmailFailed=false;
      this.showPassFailed=false;
      if((this.userPASS == this.confirmPASS)){
        this.showDenied=false;
        this.showEmailFailed=false;
        this.showPassFailed=false;
        if((this.eMAIL.includes("@"))){
          this.showDenied=false;
          this.showEmailFailed=false;
          this.showPassFailed=false;

          this.userData.username = this.userNAME;
          this.userData.password = this.userPASS;
          this.userData.email = this.eMAIL;
          this.userData.nickname = this.nick;
          this.userData.userType = this.TYPE;
      console.log(this.userData);
      console.log("REGISTERED");

      this.auth.createUser(this.userData)
      .subscribe(data =>{
          console.log(data);
          
        })
        }
        else{
          this.showEmailFailed=true;
        }
      }
      else{
        this.showPassFailed=true;
      }
      }
    else{
      this.showDenied=true;
    }
  }
}