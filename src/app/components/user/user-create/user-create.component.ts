import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { userService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  constructor(private userService : userService)
  {}

  userLogin: string = '';
  password: string = '';

  createUser() 
  {
    let id = 0;

    let user = new User(id, this.userLogin, this.password, 1)

    this.userService.createUser(user).subscribe(data => {window.location.href = 'http://localhost:4200';});
  }
}
