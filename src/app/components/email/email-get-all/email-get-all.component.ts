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
    this.emails = [
      new Email(1, "Ważne powiadomienie", "To jest treść ważnego powiadomienia.", 1, new Date()),
      new Email(2, "Promocja", "Mamy dla Ciebie specjalną promocję. Skorzystaj z niej!", 2, new Date()),
      new Email(3, "Zaproszenie na spotkanie", "Zapraszamy Cię na nasze spotkanie w przyszłym tygodniu.", 3, new Date()),
      new Email(4, "Nowy produkt", "Przedstawiamy nasz najnowszy produkt. Sprawdź go już dziś!", 4, new Date()),
      new Email(5, "Aktualizacja regulaminu", "Informujemy o wprowadzeniu nowych zmian w regulaminie serwisu.", 5, new Date()),
      new Email(6, "Podziękowanie za rejestrację", "Dziękujemy za rejestrację w naszym serwisie. Miłego korzystania!", 6, new Date()),
      new Email(7, "Przypomnienie o płatności", "Przypominamy o zbliżającym się terminie płatności. Prosimy uregulować należność.", 7, new Date()),
      new Email(8, "Artykuł tygodnia", "Zapraszamy do zapoznania się z naszym artykułem tygodnia. Ciekawe informacje czekają!", 8, new Date()),
      new Email(9, "Dziękujemy za zakupy", "Dziękujemy za zakupy w naszym sklepie. Mamy nadzieję, że jesteś zadowolony z naszych produktów.", 9, new Date()),
      new Email(10, "Nowa oferta pracy", "Ogłaszamy nową ofertę pracy. Jeśli jesteś zainteresowany, skontaktuj się z nami.", 10, new Date()),
    ];
    
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
