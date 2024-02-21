import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/api/tasks/';  // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
