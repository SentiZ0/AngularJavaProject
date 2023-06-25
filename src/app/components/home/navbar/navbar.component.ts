import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loggedUserLogin? : string;
  loggedUserPassword? : string;
  loggedUserRole? : number = 0;

  public isButtonVisible = false;

  ngOnInit()
  {
    let userLogin = localStorage.getItem('loggedUserLogin');

    if(userLogin)
    {
       this.loggedUserLogin = userLogin;
    }

    let userPassword = localStorage.getItem('LoggedUserPassword');

    if(userPassword)
    {
      this.loggedUserPassword = userPassword;
    }

    let userRole = localStorage.getItem('LoggedUserRole');

    if(userRole)
    {
      this.loggedUserRole = parseInt(userRole);
    }
    else
    {
      this.isButtonVisible = true;
    }
  }

  logOut() : void
  {
    localStorage.removeItem('loggedUserLogin');
    localStorage.removeItem('LoggedUserPassword');

    window.location.reload();
  }

}
