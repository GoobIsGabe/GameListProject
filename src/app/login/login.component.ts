import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthenticateService } from './authenticate.service';
=======
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

>>>>>>> f19184561d5351b702c276b1eff6b178ef3e8313
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal]
})
export class LoginComponent implements OnInit {
  userData:any={}

<<<<<<< HEAD
  constructor(private _auth:AuthenticateService) { }

=======
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
>>>>>>> f19184561d5351b702c276b1eff6b178ef3e8313
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

<<<<<<< HEAD
  loginUser(){
    console.log(this.userData)
    console.log(this.userData.username)
    // this._auth.loginUser(this.userData).subscribe(
    // res => console.log("success "+res),
    // err => console.log("failed "+err))
    
  }
 
=======
  open(content: any) {
    this.modalService.open(content, {centered: true});
  }
>>>>>>> f19184561d5351b702c276b1eff6b178ef3e8313
}
