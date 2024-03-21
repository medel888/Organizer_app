import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/api/tasks/';

  private http = inject(HttpClient);

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }

  createTask(task: any){
    return this.http.post<any>(this.apiUrl, task);
  }

  getSingleTask(id: number){
    return this.http.get<Task>(`${this.apiUrl}${id}`);
  }
}
