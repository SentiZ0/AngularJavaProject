import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { userService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  user?: User;

  constructor(private userService : userService)
  {}

  userLogin: string = '';
  password: string = '';

  loginUser()
  {
    let id = 0;

    let user = new User(id, this.userLogin, this.password)

    this.userService.loginUser(user).subscribe(user => {this.user = user;
      if(this.user != undefined)
      {
        localStorage.setItem('LoggedUserLogin', this.user.userLogin.toString());

        localStorage.setItem('LoggedUserPassword', this.user.password);

        localStorage.setItem('LoggedUserId', this.user.id.toString());

        window.location.href = 'http://localhost:4200';
      }});


  }
}
