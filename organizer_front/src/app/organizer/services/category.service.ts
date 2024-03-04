import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8000/api/categories/';

  private http = inject(HttpClient);

  getCategories() {
    return this.http.get<Category[]>(this.apiUrl);
  }

  createCategory(category: any){
    return this.http.post<any>(this.apiUrl, category);
  }

  deleteCategory(id: number){
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
