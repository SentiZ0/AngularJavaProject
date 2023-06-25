import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class categoryService {

  constructor(private httpClient : HttpClient) { }

  getCategories = (): Observable<Category[]> => this.httpClient.get<Category[]>("http://localhost:8080/categories/getAll");

  getCategory  = (id: number): Observable<Category> => this.httpClient.get<Category>("http://localhost:8080/categories/getSingle/" + id);

  createCategory = (category: Category): Observable<Category> => this.httpClient.post<Category>("http://localhost:8080/categories/create", category);

  updateCategory = (category: Category): Observable<Category> => this.httpClient.put<Category>("http://localhost:8080/categories/update", category);

  deleteCategory = (id: number): Observable<Category> => this.httpClient.delete<Category>("http://localhost:8080/categories/delete/" + id);
}
