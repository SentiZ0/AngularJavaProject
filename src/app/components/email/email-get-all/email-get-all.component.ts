import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from 'src/app/models/email';
import { emailService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-email-get-all',
  templateUrl: './email-get-all.component.html',
  styleUrls: ['./email-get-all.component.css']
})
export class EmailGetAllComponent {
  emails?: Email[];

  paginatedPosts: Email[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;
  totalPages: number[] = [];

  userRole: number = 0;

  ngOnInit(){    
    this.getEmails();

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

  constructor(private emailService: emailService, private router : Router)
  {}

  getEmails()
  {
    this.emailService.getEmails().subscribe(emails => {this.emails = emails});
  }

  calculateTotalPages(): void {
    if(this.emails)
    {
      this.totalPages = [];
      const totalPosts = this.emails.length;
      const totalPages = Math.ceil(totalPosts / this.itemsPerPage);
      for (let i = 1; i <= totalPages; i++) {
        this.totalPages.push(i);
      }
    }

  }

  updatePaginatedPosts(): void {
    if(this.emails)
    {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.paginatedPosts = this.emails.slice(startIndex, endIndex);
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.updatePaginatedPosts();
    }
  }
}
