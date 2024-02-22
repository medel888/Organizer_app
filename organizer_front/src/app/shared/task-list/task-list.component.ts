import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasksList: Task[] = []


  constructor(private taskService: TaskService) {
    this.update();
  }

  update(): void {
    this.taskService.getTasks().subscribe(
      data => {
        this.tasksList = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  
}
