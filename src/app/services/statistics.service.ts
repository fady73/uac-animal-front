import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
      private clientsNumURL = 'http://uac-animal.com/emp_Manage/ds-clientsNum.php';
      private employeesNumURL = 'http://uac-animal.com/emp_Manage/ds-employeesNum.php';
      private visitsNumURL = 'http://uac-animal.com/emp_Manage/ds-visitsNum.php';

      getClientsNum(): Observable<string> {
        return this.http.get<string>(this.clientsNumURL);
      }
      getEmployeesNum(): Observable<string> {
        return this.http.get<string>(this.employeesNumURL);
      }
      getVisitsNum(): Observable<string> {
        return this.http.get<string>(this.visitsNumURL);
      }
  constructor(private http: HttpClient) { }
}
