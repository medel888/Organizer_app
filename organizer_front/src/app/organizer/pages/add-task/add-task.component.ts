import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/category';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export default class AddTaskComponent {
  categories: Category[] = [];

  titlePattern = '^[A-Z][a-zA-ZÑñ ]*$';

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.pattern(this.titlePattern), Validators.maxLength(40)]),
    category: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(700)]),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required), 
  });


  constructor(private taskService: TaskService, private categoryService: CategoryService, private toastrService: ToastrService) {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  onSubmit() {
    /* console.log(this.taskForm.value); */
    this.createTask(this.taskForm.value);
    this.taskForm.reset();
  }

  createTask(data: any) {
    this.taskService.createTask(data).subscribe(
      response => {
        // Actualiza la vista o redirige según sea necesario
        this.toastrService.success('Tarea agregada');
      },
      error => {
        this.toastrService.error('Error al agregar la tarea');
        console.error('Error al crear la tarea', error);
      }
    );
  }

  getTitleError(): string{
    if(this.taskForm.get('title')?.touched){
      if(this.taskForm.get('title')?.hasError('required')){
        return 'El título es obligatorio';
      }if(this.taskForm.get('title')?.hasError('pattern')){
        return 'El título debe comenzar con mayúscula';
      }if(this.taskForm.get('title')?.hasError('maxlength')){
        return 'El título no puede superar los 40 caracteres';
      }
    }

    return'';
    
  }
  
  getCategoryError(): string{
    if(this.taskForm.get('category')?.touched){
      if(this.taskForm.get('category')?.hasError('required')){
        return 'La categoría es obligatoria';
      }
    }

    return '';

  }

  getDescriptionError(): string{
    if(this.taskForm.get('description')?.touched){
      if(this.taskForm.get('description')?.hasError('required')){
        return 'La descripción es obligatoria';
      }if(this.taskForm.get('description')?.hasError('maxlength')){
        return 'La descripción no puede superar los 700 caracteres';
      }
    }

    return '';

  }

  getDateError(): string{
    if(this.taskForm.get('date')?.touched){
      if(this.taskForm.get('date')?.hasError('required')){
        return 'La fecha es obligatoria';
      }
    } 

    return '';

  }

  getTimeError(): string{
    if(this.taskForm.get('time')?.touched){
      if(this.taskForm.get('time')?.hasError('required')){
        return 'La hora es obligatoria';
      }
    } 

    return '';

  }
}
