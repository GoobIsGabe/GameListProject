import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  private ourURL = "http://localhost:9095/api/v2/employees";
  constructor(private http: HttpClient,private user: User) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.ourURL}`);
  }

  updateUser(){

  }

 loginUser(user:any){
  return this.http.post<any>("urlHERE",user)
 }

}
