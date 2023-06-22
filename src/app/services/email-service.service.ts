import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class emailService {

  constructor(private httpClient : HttpClient) { }

  getEmails = (): Observable<Email[]> => this.httpClient.get<Email[]>("http://localhost:8080/emails/getAll");

  getEmail  = (id: number): Observable<Email> => this.httpClient.get<Email>("http://localhost:8080/emails/getSingle/" + id);
}
