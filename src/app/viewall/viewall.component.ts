import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})

export class ViewallComponent implements OnInit {

  title = 'user-list';
  public data:any = []
  constructor(private http: HttpClient) {
    
  }
 //for users
  getData(){
    const url ='http://localhost:9095/api/v2/users'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  //for games
  getData2(){
    const url ='http://localhost:9095/api/v2/games'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  ngOnInit(): void {
    this.getData()
    this.getData2()
  }

}
