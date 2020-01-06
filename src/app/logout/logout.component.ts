import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,
            private router: Router) { }

  ngOnInit() {
    this.authService.logOut().subscribe( data => {
      if (data.success) {
      this.authService.setLoggedIn(false);
        this.router.navigate(['login']);
      } else {
        window.alert('يوجد مشكلة فى تسجيل الخروج');
      }
    });
  }

}
