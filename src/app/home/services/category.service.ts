import { Injectable } from '@angular/core';
import { Category } from '../components/types/category';
import { categories } from '../components/data/categories.data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategories(): Category[] {
    return categories;
  }
}
