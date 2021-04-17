import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal]
})
export class LoginComponent implements OnInit {
  userData:any={}
  users:User[] | any;
  public showProfile = false;
  public showLogin = true;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private auth: AuthenticateService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.auth.getUsers().subscribe((data: User[]) =>{
      console.log(data);
      this.users = data;
    })
  }
 
  loginUser(){
    console.log(this.userData)
    console.log(this.userData.username)
    
    if(this.userData.username=="James" && this.userData.password=="mypass123"){
      this.showProfile = true;
      this.showLogin = false;
    }
    else{
      this.showProfile=false;
    }
    // this._auth.loginUser(this.userData).subscribe(
    // res => console.log("success "+res),
    // err => console.log("failed "+err))
    
  }
 
  open(content: any) {
    this.modalService.open(content, {centered: true});
  }
}
