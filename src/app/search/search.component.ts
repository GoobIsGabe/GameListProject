import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public uData:User|any = [];
  public nickname = ""
  public userNAME = ""
  constructor(private auth: AuthenticateService, private route: Router) { }

  ngOnInit(): void {
    this.auth.getUsers()
    .subscribe((data:User[]) => {
      this.uData = data;
    });
  }
searchUser(){
  for(let i=0; i<this.uData.length;i++){
    if((this.userNAME == this.uData[i].username)){
      console.log("SUCCESS");
      // this.auth.setData(this.userData[i]);
      this.nickname = this.uData[i].nickname;
    }
    else{
     
    }
  }
}
back(){
  this.route.navigate(['home'])
}

  

}
