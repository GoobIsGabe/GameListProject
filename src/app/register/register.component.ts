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
<<<<<<< HEAD
  public userData:User|any = {};
=======
  public userData:User|any = [];
>>>>>>> f0e8fed4e0db25eecdf568b6adc7b34b8df42948
 
  //INPUT
  userNAME:string = "";
  userPASS:string = "";
  confirmPASS:string = "";
  eMAIL:string = "";
<<<<<<< HEAD
  nick:string = "";
=======
>>>>>>> f0e8fed4e0db25eecdf568b6adc7b34b8df42948
  TYPE:string = "";
 
  
  //Interface
  public showProfile = false;
  public showRegister = true;
  public showDenied = false;
<<<<<<< HEAD
  public showPassFailed =false;
  public showEmailFailed =false;

=======
>>>>>>> f0e8fed4e0db25eecdf568b6adc7b34b8df42948



  constructor(config: NgbModalConfig, private modalService: NgbModal, private auth: AuthenticateService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  //GETTING DATA FROM SERVER
  ngOnInit(): void {
<<<<<<< HEAD
  
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
=======
    this.auth.getUsers()
    .subscribe((data:User[]) => {
      this.userData = data;
    });
  }

  //login component currently does not disappear when New User clicked
 
  registerUser(){
    if((this.userPASS == this.confirmPASS) && (this.eMAIL.includes("@"))){
      console.log("REGISTERED");
      this.showProfile=true;
      this.showRegister=false;

      console.log(this.userData)
      this.auth.registerUser(this.userData)
        .subscribe(data =>{
          console.log("UPDATED SUCCESSFULLY");
          console.log(data)
          console.log(this.userData.username)
          console.log(this.userData.password)
          console.log(this.userData.email)
        })
>>>>>>> f0e8fed4e0db25eecdf568b6adc7b34b8df42948
      }
    else{
      this.showDenied=true;
    }
  }
}