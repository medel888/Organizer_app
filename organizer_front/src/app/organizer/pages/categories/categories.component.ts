import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/category';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export default class CategoriesComponent {
  categories = signal <Category[]> ([])
  namePettern: string = '^[A-Z][a-zA-Z]*$';
  
  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(this.namePettern), Validators.maxLength(20)])
  });


  constructor(private categoryService: CategoryService, private toastrService: ToastrService, private router: Router){
    this.update();
  }

  update(){
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories.set(data);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  onSubmit(){
    this.categoryService.createCategory(this.categoryForm.value).subscribe(
      response => {
        console.log('Categoria creada con éxito', response);
        // Actualiza la vista o redirige según sea necesario
          this.toastrService.success('Categoría agregada');
          this.update();
      },
      error => {
        console.error('Error al crear la categoria', error);
      }
    );
    this.categoryForm.reset();
  }

  delete(id: number) {
    this.categoryService.deleteCategory(id).subscribe(
      () => {
        console.log('Categoría eliminada con éxito');
        // Aquí puedes actualizar la lista de categorías o realizar otras acciones necesarias
        this.update();
      },
      error => {
        this.toastrService.error('Eliminación fallida')
        console.error('Error al eliminar la categoría:', error);
        // Aquí puedes manejar el error y mostrar un mensaje al usuario si es necesario
      }
    );
  }

  invalidField(field: string){
    return this.categoryForm.get(field)?.invalid
          && this.categoryForm.get(field)?.touched;
  }

  getNameError(): string{
    if(this.categoryForm.get('name')?.touched){
      if(this.categoryForm.get('name')?.hasError('required')){
        return 'El nombre es obligatorio';
      }if(this.categoryForm.get('name')?.hasError('pattern')){
        return 'El nombre debe comenzar con mayúscula';
      }if(this.categoryForm.get('name')?.hasError('maxlength')){
        return 'El nombre no puede superar los 20 caracteres';
      }
    }

    return '';

  }

  redirectToAddPage() {
    this.router.navigate(['/organizer/add']);
  }
}
