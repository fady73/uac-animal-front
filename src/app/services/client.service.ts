import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Client } from '../shared/client';
import { CLIENTS } from '../shared/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
    getClients(): Observable<Client[]> {
        return of(CLIENTS).pipe(delay(2000));
    }

    getClient(id: string): Observable<Client> {
        return of(CLIENTS.filter((client) => (client.id === id))[0]).pipe(delay(2000));
    }
  constructor() { }
}
