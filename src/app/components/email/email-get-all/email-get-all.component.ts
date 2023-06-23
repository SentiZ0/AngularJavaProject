import { Component } from '@angular/core';
import { Email } from 'src/app/models/email';
import { emailService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-email-get-all',
  templateUrl: './email-get-all.component.html',
  styleUrls: ['./email-get-all.component.css']
})
export class EmailGetAllComponent {
  emails?: Email[];

  ngOnInit(){
    this.getEmails();
  }

  constructor(private emailService: emailService)
  {}

  getEmails()
  {
    this.emailService.getEmails().subscribe(emails => {this.emails = emails});
  }
}
