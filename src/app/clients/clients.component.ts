import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
    clients: Client[];

    selectedClient: Client;

    onSelect(client: Client) {
        this.selectedClient = client;
    }

    constructor(private clientService: ClientService) { }

    ngOnInit() {
        this.clients = this.clientService.getClients();
  }

}