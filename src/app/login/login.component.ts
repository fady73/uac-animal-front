import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.authService.isLoggedIn);
    if (this.authService.isLoggedIn === true) {
      this.router.navigate(['home']);
    }
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const pass = target.querySelector('#password').value;
    const role = target.querySelector('#role').value;

    const fd = new FormData();
    fd.append('username', username);
    fd.append('password', pass);
    fd.append('role', role);

     this.authService.getUserDetails(fd).subscribe(
        data => {
          if (data.success) {
            // redirect to home page
            alert(data.message);
            this.authService.setLoggedIn(true);
            this.router.navigate(['home']);
          } else {
            // alert message and stay in the page
            this.authService.setLoggedIn(false);
            alert(data.message);
          }
      });
    console.log(username + ' ' + pass + ' ' + role);
  }
}
