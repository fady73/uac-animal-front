import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Moderator } from '../shared/moderator';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {
    private url = 'http://uac-animal.com/emp_Manage/ds-getModerators.php';
    private addModeratorURL = 'http://uac-animal.com/emp_Manage/ds-addModerator.php';
    private deleteModeratorURL = 'http://uac-animal.com/emp_Manage/ds-deleteModerator.php';
    private trashUrl = 'http://uac-animal.com/emp_Manage/ds-trashModerators.php';

    // getModerators(): Observable<Moderator[]> {
    //     return this.http.get<Moderator[]>(this.url);
    // }

    ///laravel///

 
    getModerators(): Observable<Moderator[]> {
      return this.http.get<Moderator[]>('http://laravel.uac-animal.com/api/moderators' );
  }

  getmoderators():Observable<object> {
    return this.http.get('http://laravel.uac-animal.com/api/moderators');
  }

    ///

    getTrashModerators(): Observable<Moderator[]> {
      return this.http.get<Moderator[]>(this.trashUrl);
  }

    addModerator(moderator) {
      return this.http.post<any>(this.addModeratorURL, moderator);
    }

    deleteModerator(id: string) {
      return this.http.post<any>(this.deleteModeratorURL, id);
    }

    constructor(private http: HttpClient) { }
}
