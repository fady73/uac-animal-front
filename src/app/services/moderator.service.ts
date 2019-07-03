import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Moderator } from '../shared/moderator';
import { MODERATORS } from '../shared/moderators';
@Injectable({
  providedIn: 'root'
})
export class ModeratorService {
    getModerators(): Observable<Moderator[]> {
        return of(MODERATORS).pipe(delay(2000));
    }

  constructor() { }
}
