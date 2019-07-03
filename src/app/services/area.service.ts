import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Area } from '../shared/area';
import { AREAS } from '../shared/areas';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
    getAreas(): Observable<Area[]> {
        return of(AREAS).pipe(delay(2000));
    }

  constructor() { }
}
