import { Component } from '@angular/core';
import { Category } from '../types/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {
  categories: Category[] = [];
  
  constructor(private categoryService: CategoryService){
    this.categories = categoryService.getAllCategories();
  }

  getCategories(parentCategoryId?: number):Category[]{
    return this.categories.filter(categor => categor.parent_category_id === parentCategoryId);
  }
}
