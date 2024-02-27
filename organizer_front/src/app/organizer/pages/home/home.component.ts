import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  selected = signal<string>('All');
  prueba = signal<string>('inicial');

  showAll(): void{
    this.selected.set('All');
    this.prueba.set('Todos');
  }

  showToday(): void{
    this.selected.set('Today');
    this.prueba.set('Hoy');
  }

  showScheduled(): void{
    this.selected.set('Scheduled');
    this.prueba.set('Programado');
  }

  showImportant(): void{
    this.selected.set('Important');
    this.prueba.set('Importante');
  }

  showCompleted(): void{
    this.selected.set('Completed');
    this.prueba.set('Completado');
  }

  showTrash(): void{
    this.selected.set('Trash');
    this.prueba.set('Papelera');
  }
}
