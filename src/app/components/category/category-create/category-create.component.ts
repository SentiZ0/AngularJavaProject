import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { categoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent {
  categoryName: string = "";
  
  constructor(private categoryService: categoryService)
  {}

  createCategory() {
    let id = 0;
  
    let category: Category = new Category(id, this.categoryName);
  
    this.categoryService.createCategory(category).subscribe();
  }
}
