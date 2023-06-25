import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { categoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent {
  categoryName: string = "";

  userRole : number = 0;

  constructor(private categoryService: categoryService, private router: Router)
  {}

  ngOnInit()
  {
    let userRoleAsString = localStorage.getItem('loggedUserRole');

    if (userRoleAsString) {
      this.userRole = parseInt(userRoleAsString);
    }

    if(this.userRole == null || this.userRole < 2)
    {
      this.router.navigate(['/no-auth']);
    }
  }

  createCategory() {
    let id = 0;
  
    let category: Category = new Category(id, this.categoryName);
  
    this.categoryService.createCategory(category).subscribe(data => {
      this.router.navigate(['/category-get-all']);
    });

    
  }
}
