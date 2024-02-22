import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Task } from '../../interfaces/task';

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
    description: new FormControl(''),
    date: new FormControl(),
    category: new FormControl(''),
    priority: new FormControl(''),
  });

  onSubmit() {
    console.log(this.taskForm.value);
  }
}
