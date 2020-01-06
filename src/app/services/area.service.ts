import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Area } from '../shared/area';
import { AREAS } from '../shared/areas';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AreaService {
    private url = 'http://uac-animal.com/emp_Manage/ds-getAreas.php';
    private deleteAreaUrl = 'http://uac-animal.com/emp_Manage/ds-deleteArea.php';
    private addAreaUrl = 'http://uac-animal.com/emp_Manage/ds-addArea.php';
    getAreas(): Observable<Area[]> {
        return this.http.get<Area[]>(this.url);
       // return of(AREAS).pipe(delay(2000));
    }

    saveArea(area: FormData) {
        return this.http.post<Area>(this.addAreaUrl , area);
    }

    deleteArea(id: string) {
        return this.http.post<any>(this.deleteAreaUrl, id);
    }

    constructor(private http: HttpClient) { }
}
