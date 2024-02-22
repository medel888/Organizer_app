import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl(),
    priority: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });


  constructor(private taskService: TaskService) {}

  onSubmit() {
    /* console.log(this.taskForm.value); */
    this.createTask(this.taskForm.value);
  }

  createTask(data: any) {
    this.taskService.createTask(data).subscribe(
      response => {
        console.log('Tarea creada con éxito', response);
        // Actualiza la vista o redirige según sea necesario
      },
      error => {
        console.error('Error al crear la tarea', error);
      }
    );
  }
}
