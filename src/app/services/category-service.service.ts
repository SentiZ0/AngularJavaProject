import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class categoryService {

  constructor(private httpClient : HttpClient) { }

  getCategories = (): Observable<Category> => this.httpClient.get<Category>("https://localhost:8080/category/Comments");

  getCategory  = (id: number): Observable<Category> => this.httpClient.get<Category>("https://localhost:8080/category/Comments/" + id);

  createCategory = (category: Category): Observable<Category> => this.httpClient.post<Category>("https://localhost:8080/category/Comments", category);

  updateCategory = (id: number, category: Category): Observable<Category> => this.httpClient.put<Category>("https://localhost:8080/category/Comments/" + id, category);

  deleteCategory = (id: number): Observable<Category> => this.httpClient.delete<Category>("https://localhost:8080/category/Comments/" + id);
}
