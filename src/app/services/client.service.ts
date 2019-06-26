import { Injectable } from '@angular/core';
import { Client } from '../shared/client';
import { CLIENTS } from '../shared/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
    getClients(): Client[] {
        return CLIENTS;
    }

  constructor() { }
}
