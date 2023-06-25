import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { userService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-get-all',
  templateUrl: './user-get-all.component.html',
  styleUrls: ['./user-get-all.component.css']
})
export class UserGetAllComponent {
  users? : User[];

  paginatedPosts: User[] = [];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number[] = [];

  userRole: number = 0;

  ngOnInit()
  {
    let userRoleAsString = localStorage.getItem('loggedUserRole');

    if (userRoleAsString) {
      this.userRole = parseInt(userRoleAsString);
    }

    if(this.userRole == null || this.userRole < 3)
    {
      this.router.navigate(['/no-auth']);
    }

    this.calculateTotalPages();
    this.updatePaginatedPosts();
  }

  constructor(private userService : userService, private router: Router)
  {}

  getUsers()
  {
    this.userService.getUsers().subscribe(users => {this.users = users});
  }

  updateUserRole(user: User) {
  }

  saveUserRole(user: User) {
    this.userService.updateUser(user).subscribe(users => {this.getUsers()});
  }

  getRoleName(roleId: number): string {
    switch (roleId) {
      case 1:
        return "Użytkownik";
      case 2:
        return "Redaktor";
      case 3:
        return "Admin";
      default:
        return "";
    }
  }

  calculateTotalPages(): void {
    if(this.users)
    {
      this.totalPages = [];
      const totalPosts = this.users.length;
      const totalPages = Math.ceil(totalPosts / this.itemsPerPage);
      for (let i = 1; i <= totalPages; i++) {
        this.totalPages.push(i);
      }
    }

  }

  updatePaginatedPosts(): void {
    if(this.users)
    {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.paginatedPosts = this.users.slice(startIndex, endIndex);
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.updatePaginatedPosts();
    }
  }
}
