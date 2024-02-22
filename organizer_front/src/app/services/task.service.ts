import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/api/tasks/';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }

  createTask(task: any){
    return this.http.post<any>(this.apiUrl, task);
  }
}
