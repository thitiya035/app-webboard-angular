import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.interface';
// import {User} from '../user.interface'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLogin?: User;

  constructor( private http: HttpClient) { }

  private url = 'http://localhost:3000/users';

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

}
