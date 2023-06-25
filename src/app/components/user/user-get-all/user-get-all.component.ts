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
    this.users = [
      new User(1, "john123", "password123", 1),
      new User(2, "alice89", "secret123", 2),
      new User(3, "bobsmith", "p@ssw0rd", 1),
      new User(4, "emily22", "qwerty123", 2),
      new User(5, "mike87", "abcd1234", 1),
      new User(6, "sarah123", "password987", 2),
      new User(7, "david01", "pass123word", 1),
      new User(8, "jessica99", "abc123", 2),
      new User(9, "alex12", "qwertyuiop", 1),
      new User(10, "laura55", "password456", 2)
    ];

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
