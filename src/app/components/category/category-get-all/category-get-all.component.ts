import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { categoryService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-get-all',
  templateUrl: './category-get-all.component.html',
  styleUrls: ['./category-get-all.component.css']
})
export class CategoryGetAllComponent {
  categories?: Category[];

  paginatedPosts: Category[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;
  totalPages: number[] = [];

  userRole: number = 0;

  constructor(private categoryService : categoryService, private router : Router)
  {}

  ngOnInit()
  {
    this.categories = [
      new Category(1, "Elektronika"),
      new Category(2, "Moda"),
      new Category(3, "Dom i ogród"),
      new Category(4, "Motoryzacja"),
      new Category(5, "Książki"),
      new Category(6, "Sport i rekreacja"),
      new Category(7, "Zdrowie i uroda"),
      new Category(8, "Dzieci"),
      new Category(9, "Gry i zabawki"),
      new Category(10, "Filmy i muzyka"),
    ];
    
    this.getCategories();

    let userRoleAsString = localStorage.getItem('loggedUserRole');

    if (userRoleAsString) {
      this.userRole = parseInt(userRoleAsString);
    }

    if(this.userRole == null || this.userRole < 2)
    {
      this.router.navigate(['/no-auth']);
    }

    this.calculateTotalPages();
    this.updatePaginatedPosts();
  }

  getCategories()
  {
    this.categoryService.getCategories().subscribe(categories => {this.categories = categories})
  }

  deleteCategory(id: number)
  {
    this.categoryService.deleteCategory(id).subscribe(categories => {this.getCategories()});
  }

  calculateTotalPages(): void {
    if(this.categories)
    {
      this.totalPages = [];
      const totalPosts = this.categories.length;
      const totalPages = Math.ceil(totalPosts / this.itemsPerPage);
      for (let i = 1; i <= totalPages; i++) {
        this.totalPages.push(i);
      }
    }
  }

  updatePaginatedPosts(): void {
    if(this.categories)
    {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.paginatedPosts = this.categories.slice(startIndex, endIndex);
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.updatePaginatedPosts();
    }
  }
}
