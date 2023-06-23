import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class commentService {

  constructor(private httpClient : HttpClient) { }

  getComments = (id: number): Observable<Comment[]> => this.httpClient.get<Comment[]>("http://localhost:8080/comments/getAll/" + id);

  getComment  = (id: number): Observable<Comment> => this.httpClient.get<Comment>("http://localhost:8080/comments/getSingle/" + id);

  createComment = (Comment: Comment): Observable<Comment> => this.httpClient.post<Comment>("http://localhost:8080/comments/create", Comment);

  updateComment = (id: number, Comment: Comment): Observable<Comment> => this.httpClient.put<Comment>("http://localhost:8080/comments/update/" + id, Comment);

  deleteComment = (id: number): Observable<Comment> => this.httpClient.delete<Comment>("http://localhost:8080/comments/delete/" + id);
}

