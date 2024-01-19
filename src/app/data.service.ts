import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private readonly API_URL = 'http://localhost:3000';

  fetchEmployee(): Observable<any>{
    return this.http.get(`${this.API_URL}/allemployees`);
  }

  fetchSoftware(department: string): Observable<any>{
    return this.http.get(`${this.API_URL}/department/${department}`);
  }
}
