import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  success: boolean;
  message: string;
}
interface loggedOutStatus {
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private adminInfoUrl = 'http://uac-animal.com/emp_Manage/ds-adminLogin.php';
  private adminLogout = 'http://uac-animal.com/emp_Manage/ds-adminlogout.php';

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) { }

  getUserDetails(fd: FormData) {
    // post this details to HTTP api Server
    return this.http.post<myData>(this.adminInfoUrl, fd);
  }

  setLoggedIn(value: any) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', value);
  }

  logOut(): Observable<loggedOutStatus> {
    return this.http.get<loggedOutStatus>(this.adminLogout);
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn')
     || this.loggedInStatus);
  }
}
