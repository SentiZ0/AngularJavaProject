import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private httpClient : HttpClient) { }

  getUsers = (): Observable<User[]> => this.httpClient.get<User[]>("http://localhost:8080/users/getAll");

  getUser  = (id: number): Observable<User> => this.httpClient.get<User>("http://localhost:8080/users/getSingle/" + id);

  createUser = (User: User): Observable<User> => this.httpClient.post<User>("http://localhost:8080/users/create", User);

  updateUser = (id: number, User: User): Observable<User> => this.httpClient.put<User>("http://localhost:8080/users/update/" + id, User);

  deleteUser = (id: number): Observable<User> => this.httpClient.delete<User>("http://localhost:8080/users/delete/" + id);
}
