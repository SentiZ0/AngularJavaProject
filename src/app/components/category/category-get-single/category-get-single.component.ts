import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { categoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-get-single',
  templateUrl: './category-get-single.component.html',
  styleUrls: ['./category-get-single.component.css']
})
export class CategoryGetSingleComponent {
  category?: Category;

  editMode: boolean = false;

  constructor(private categoryService : categoryService)
  {
    this.getCategory();
  }

  saveCategory() {
    if(this.category)
    {
      let category = new Category(this.category?.id, this.category?.categoryName)

      this.categoryService.updateCategory(category.id, category).subscribe();
      this.editMode = false;
    }

  }

  getCategory()
  {
    let id = 0;

    this.categoryService.getCategory(id).subscribe(category => {this.category = category});
  }

  cancelEdit() {
    this.editMode = false;
  }
}
