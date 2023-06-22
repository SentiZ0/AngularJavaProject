import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { categoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-get-all',
  templateUrl: './category-get-all.component.html',
  styleUrls: ['./category-get-all.component.css']
})
export class CategoryGetAllComponent {
  categories?: Category[];

  constructor(private categoryService : categoryService)
  {}

  ngOnInit()
  {
    this.getCategories();
  }

  getCategories()
  {
    this.categoryService.getCategories().subscribe(categories => {this.categories = categories})
  }

  deleteCategory(id: number)
  {
    this.categoryService.deleteCategory(id).subscribe();
  }
}
