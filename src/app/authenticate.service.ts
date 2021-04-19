import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  //REST SERVER
  private ourURL = "http://localhost:9095/api/v2/users";
  private ourgamesURL = "http://localhost:9095/api/v2/games";

  //DATA
  userData:User | any;
  gameData:Game | any;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.ourURL);
  }
 
  updateUser(){

  }
  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.ourgamesURL);
  }
  updateGame(){

  }

  //FOR SHARING DATA
  setData(data: any){
    this.userData=data;
    this.gameData=data;
  }

  getData(){
    return this.userData, this.gameData;
  }


}
