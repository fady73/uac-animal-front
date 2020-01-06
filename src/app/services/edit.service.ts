import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from '../shared/client';
import { Employee } from '../shared/employee';
import { Moderator } from '../shared/moderator';
import { Area } from '../shared/area';
@Injectable({
  providedIn: 'root'
})
export class EditService {
  private fetchCompanyUrl = 'http://uac-animal.com/emp_Manage/ds-fetchCompanyInfo.php';
  private updateCompanyUrl = 'http://uac-animal.com/emp_Manage/ds-updateClient.php';
  private fetchEmployeeUrl = 'http://uac-animal.com/emp_Manage/ds-fetchEmployee.php';
  private updateEmployeeUrl = 'http://uac-animal.com/emp_Manage/ds-updateEmployee.php';
  private fetchModeratorUrl = 'http://uac-animal.com/emp_Manage/ds-fetchModerator.php';
  private updateModeratorUrl = 'http://uac-animal.com/emp_Manage/ds-updateModerator.php';
  private fetchAreaUrl = 'http://uac-animal.com/emp_Manage/ds-fetchArea.php';
  private updateAreaUrl = 'http://uac-animal.com/emp_Manage/ds-updateArea.php';

  fetchClient(id: string): Observable<Client> {
    return this.http.get<Client>(this.fetchCompanyUrl,
       { params: {company_id: id} });
  }

  fetchEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.fetchEmployeeUrl,
       { params: {emp_id: id} });
  }

  fetchModerator(id: string): Observable<Moderator> {
    return this.http.get<Moderator>(this.fetchModeratorUrl,
       { params: {mod_id: id} });
  }

  fetchArea(id: string): Observable<Area> {
    return this.http.get<Area>(this.fetchAreaUrl,
       { params: {area_id: id} });
  }

  updateClient(formData: FormData) {
    return this.http.post<any>(this.updateCompanyUrl, formData);
  }

  updateEmployee(formData: FormData) {
    return this.http.post<any>(this.updateEmployeeUrl, formData);
  }

  updateModerator(formData: FormData) {
    return this.http.post<any>(this.updateModeratorUrl, formData);
  }

  updateArea(formData: FormData) {
    return this.http.post<any>(this.updateAreaUrl, formData);
  }
  constructor(private http: HttpClient) { }
}
