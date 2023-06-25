import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private httpClient : HttpClient) { }

  createUser = (User: User): Observable<User> => this.httpClient.post<User>("http://localhost:8080/user-accounts/create", User);

  loginUser = (User: User): Observable<User> => this.httpClient.post<User>("http://localhost:8080/user-accounts/auth", User);

  getUsers = () : Observable<User[]> => this.httpClient.get<User[]>("http://localhost:8080/user-accounts/getAll");

  updateUser = (User: User) : Observable<User> => this.httpClient.put<User>("http://localhost:8080/user-accounts/update", User);
}
