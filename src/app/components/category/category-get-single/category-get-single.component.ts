import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  editCategoryName: string = "";

  userRole : number = 0;

  constructor(private categoryService : categoryService, private route: ActivatedRoute, private router: Router)
  {
  }

  ngOnInit()
  {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.category = new Category(1, "Elektronika");

    this.getCategory();

    let userRoleAsString = localStorage.getItem('loggedUserRole');

    if (userRoleAsString) {
      this.userRole = parseInt(userRoleAsString);
    }

    if(this.userRole == null || this.userRole < 2)
    {
      this.router.navigate(['/no-auth']);
    }
  }

  saveCategory() {
    if (this.category) {
      const updatedCategory = new Category(this.category.id, this.editCategoryName);
      this.categoryService.updateCategory(updatedCategory).subscribe(data => {
        this.router.navigate(['/category-get-all']);
      });
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
