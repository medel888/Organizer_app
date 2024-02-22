import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskFormComponent } from '../../shared/task-form/task-form.component';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export default class TaskListComponent {
  tasksList: Task[] = []

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  loadTasks(): void {
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
