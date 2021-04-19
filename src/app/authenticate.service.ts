import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
import { retry } from 'rxjs/operators';
import {catchError} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  //REST SERVER
  private ourURL = "http://localhost:9095/api/v2/users";
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  //DATA
  userData:User | any;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.ourURL);
  }

  updateUser(id:number,data:any): Observable<User[]>{
    return this.http.put<User>(this.ourURL+ "/" + id, JSON.stringify(data),this.httpOption)
    .pipe(
      retry(1),
      catchError(this.userData)
    )

  }

  //FOR SHARING DATA
  setData(data: any){
    this.userData=data;
  }

  getData(){
    return this.userData;
  }

  //Error handling

  errorHandl(error:any){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }
    else{
      errorMessage =`Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
