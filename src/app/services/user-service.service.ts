import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private httpClient : HttpClient) { }

  createUser = (User: User): Observable<User> => this.httpClient.post<User>("http://localhost:8080/users/create", User);

  loginUser = (User: User): Observable<User> => this.httpClient.post<User>("http://localhost:8080/users/auth", User);
}
