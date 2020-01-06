import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Visit } from '../shared/visit';

@Injectable({
  providedIn: 'root'
})
export class VisitsService {
  private URL = 'http://uac-animal.com/emp_Manage/ds-visits.php';
  private deleteVisitURL = 'http://uac-animal.com/emp_Manage/ds-deleteVisit.php';

  getVisits(): Observable<Visit[]> {
      return this.http.get<Visit[]>(this.URL);
  }

  deleteVisit(id: string) {
    return this.http.post<any>(this.deleteVisitURL, id);
  }

  constructor(private http: HttpClient) { }
}
