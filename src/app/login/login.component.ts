import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal]
})
export class LoginComponent implements OnInit {
  //User Data
  public userData:User|any = [];
 
  //INPUT
  userNAME:string = "";
  userPASS:string = "";
 
  
  //Interface
  public showLogin = true;
  public showDenied = false;


  constructor(config: NgbModalConfig, private modalService: NgbModal, private auth: AuthenticateService, private router: Router) {
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
 
  loginUser(){
    for(let i=0; i<this.userData.length;i++){
      if((this.userNAME == this.userData[i].username) && (this.userPASS == this.userData[i].password)){
       
        this.router.navigate(['home']);
        console.log("SUCCESS");
        this.showLogin=false;
        this.auth.setData(this.userData[i]);

      }
      else{
        this.showDenied=true;
      }
    }

 }
 registerUser(){
   this.router.navigate(['register']);
   this.showLogin=false;
 }
 
  open(content: any) {
    this.modalService.open(content, {centered: true});
  }
}