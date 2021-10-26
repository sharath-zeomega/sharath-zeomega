import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //its api coming from server
  url="./assets/user.json"
  getUsers():Observable<User[]>{
      return this.http.get<User[]>(this.url);
  }
}
