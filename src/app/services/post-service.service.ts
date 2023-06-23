import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class postService {

  constructor(private httpClient : HttpClient) { }

  getPosts = (): Observable<Post[]> => this.httpClient.get<Post[]>("http://localhost:8080/posts/getAll");

  getPost  = (id: number): Observable<Post> => this.httpClient.get<Post>("http://localhost:8080/posts/getSingle/" + id);

  createPost = (Post: Post): Observable<Post> => this.httpClient.post<Post>("http://localhost:8080/posts/create", Post);

  updatePost = (id: number, Post: Post): Observable<Post> => this.httpClient.put<Post>("http://localhost:8080/posts/update/" + id, Post);

  deletePost = (id: number): Observable<Post> => this.httpClient.delete<Post>("http://localhost:8080/posts/delete/" + id);

  changeStatus =  (id: number): Observable<Post> => this.httpClient.get<Post>("http://localhost:8080/posts/updateStatus/" + id);
}
