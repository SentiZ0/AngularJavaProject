import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { categoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-get-single',
  templateUrl: './category-get-single.component.html',
  styleUrls: ['./category-get-single.component.css']
})
export class CategoryGetSingleComponent {
  category?: Category;

  id: number = 0;

  editMode: boolean = false;

  constructor(private categoryService : categoryService, private route: ActivatedRoute)
  {
  }

  ngOnInit()
  {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

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
