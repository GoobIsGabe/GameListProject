import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  //REST SERVER
  private ourURL = "http://localhost:9095/api/v2/users";

  //DATA
  userData:User | any;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.ourURL);
  }

  updateUser(){

  }

  //FOR SHARING DATA
  setData(data: any){
    this.userData=data;
  }

  getData(){
    return this.userData;
  }


}
