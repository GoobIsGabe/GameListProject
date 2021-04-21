import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import {catchError} from 'rxjs/operators'; 
import { User } from './user';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  //REST SERVER
  private ourURL = "http://localhost:9095/api/v2/users";
  private ourgamesURL = "http://localhost:9095/api/v2/games";
httpOption = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  //DATA
  userData:User | any;
  gameData:Game | any;
  constructor(private http: HttpClient) { }

  //GETTING USER
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.ourURL);
  }
  //UPDATING USER
  updateUser(id:number,data:any): Observable<User[]>{
    return this.http.put<User>(this.ourURL+ "/" + id, JSON.stringify(data),this.httpOption)
    .pipe(
      retry(1),
      catchError(this.userData)
    )
<<<<<<< HEAD

  }

  //CREATING USER
  createUser(data:any): Observable<User>{
    return this.http.post<User>(this.ourURL,JSON.stringify(data),this.httpOption)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

=======
  }
  registerUser(data:any): Observable<User[]>{
    return this.http.post<User>(this.ourURL, JSON.stringify(data),this.httpOption)
       .pipe(
         retry(1),
         catchError(this.userData)
       )
     }
  //getting game
  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.ourgamesURL);
  }
  updateGame(){

  }

>>>>>>> f0e8fed4e0db25eecdf568b6adc7b34b8df42948
  //DELETING USER
  deleteUser(id:number){
    return this.http.delete<User>(this.ourURL+ "/" + id, this.httpOption)
    .pipe(
      retry(1),
      catchError(this.userData)
    )
  }

  //FOR SHARING DATA
  setData(data: any){
    this.userData=data;
    this.gameData=data;
  }

  getData(){
    return this.userData, this.gameData;
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
