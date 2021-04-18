import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameListProject';
  gameUsers: any;

  //INJECTING HTTPCLIENT TO GET DATA FROM SERVER
  constructor(private http: HttpClient){}

  //INITIALIZE DATA
  ngOnInit():void{

  }


}
