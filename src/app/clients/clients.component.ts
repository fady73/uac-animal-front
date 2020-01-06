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
    filteredText = '';
    selectedClient: Client;

    onSelect(client: Client) {
        this.selectedClient = client;
    }

    constructor(private clientService: ClientService) { }

    ngOnInit() {
        this.clientService.getClients()
        .subscribe(clients => this.clients = clients);
  }

  onDelete(id: string) {
    if (confirm('هل تريد الحذف نهائى؟ ')) {
      this.clients = this.clients.filter(
        employee => employee.id !== id
      );
      this.clientService.deleteClient(id).subscribe(
          (response: any) => {
            console.log(response);
        },
        (error: any) => console.log(error)
      );
     }
  }

  onTrash() {
    this.clientService.getTrashClients()
        .subscribe(clients => this.clients = clients);
  }

  allClients() {
    this.clientService.getClients()
        .subscribe(clients => this.clients = clients);
  }

}
