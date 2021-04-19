import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public userData:User|any = [];

  //INTERFACE
  public showProfile=false;
  public showUpdate=false;
  public isAdmin=false;

  public USERTYPE="";

  constructor(private auth: AuthenticateService) { }

  ngOnInit(): void {
    this.userData = this.auth.getData();
    this.USERTYPE = this.userData.userType;  
    if(this.USERTYPE=="admin"){
      this.isAdmin=true;
    }
    else{
    }
  }

  showProf(){
    this.showProfile=true;
    this.showUpdate=false;
  }
  showUpd(){
    this.showUpdate=true;
    this.showProfile=false;
  }

}
