import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { userService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private userService : userService)
  {}

  userLogin: string = '';
  password: string = '';

  createUser() 
  {
    let id = 0;

    let user = new User(id, this.userLogin, this.password)

    this.userService.createUser(user).subscribe();
  }
}
