import { Component, signal } from '@angular/core';

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
  prueba = signal<string>('inicial');

  showAll(): void{
    this.prueba.set('Todos');
  }

  showToday(): void{
    this.prueba.set('Hoy');
  }

  showScheduled(): void{
    this.prueba.set('Programado');
  }

  showImportant(): void{
    this.prueba.set('Importante');
  }

  showCompleted(): void{
    this.prueba.set('Completado');
  }

  showTrash(): void{
    this.prueba.set('Papelera');
  }
}
