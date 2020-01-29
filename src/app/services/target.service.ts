import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Target } from '../shared/target';

@Injectable({
  providedIn: 'root'
})
export class TargetService {

  constructor(private http: HttpClient) { }

  
  showtarget(): Observable<object> {
    return this.http.get('http://laravel.uac-animal.com/api/targets');
}

showtargetbyid(id:string): Observable<object> {
  return this.http.get(`http://laravel.uac-animal.com/api/target/mandob?employee_id=${id}`);
}

showtargetbydate(id:string,fdate:string,tdate:string): Observable<object> {
  return this.http.get(`http://laravel.uac-animal.com/api/target/mandob?employee_id=${id}&dateFrom=${fdate}&dateTo=${tdate}`);
}


addtarget(target:Target): Observable<object>
{
  return this.http.post('http://laravel.uac-animal.com/api/targets',target);
}
}
