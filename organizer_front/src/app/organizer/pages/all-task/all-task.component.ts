import { Component } from '@angular/core';

import { TaskService } from '../../services/task.service';

import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.css'
})
export default class AllTaskComponent {
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
