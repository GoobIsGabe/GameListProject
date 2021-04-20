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
  public userData:User|any = [];
 
  //INPUT
  userNAME:string = "";
  userPASS:string = "";
  confirmPASS:string = "";
  eMAIL:string = "";
  TYPE:string = "";
 
  
  //Interface
  public showProfile = false;
  public showRegister = true;
  public showDenied = false;



  constructor(config: NgbModalConfig, private modalService: NgbModal, private auth: AuthenticateService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  //GETTING DATA FROM SERVER
  ngOnInit(): void {
    this.auth.getUsers()
    .subscribe((data:User[]) => {
      this.userData = data;
    });
  }
 
  createUser(){
    if((this.userPASS == this.confirmPASS) && (this.eMAIL.includes("@"))){
      console.log("REGISTERED");
      this.showProfile=true;
      this.showRegister=false;

      console.log(this.userData)
      this.auth.createUser(this.userData)
        .subscribe(data =>{
          console.log("UPDATED SUCCESSFULLY");
          console.log(data)
          console.log(this.userData.username)
          console.log(this.userData.password)
          console.log(this.userData.email)
        })
      }
    else{
      this.showDenied=true;
    }
  }
}