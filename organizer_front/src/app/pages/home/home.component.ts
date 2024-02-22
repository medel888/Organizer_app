import { Component } from '@angular/core';

import { TaskListComponent } from '../../shared/task-list/task-list.component';
import { TaskFormComponent } from '../../shared/task-form/task-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
