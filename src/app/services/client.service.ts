import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Client } from '../shared/client';
import { ClientDetails } from '../shared/clientDetails';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
    private clientsUrl = 'http://uac-animal.com/emp_Manage/ds-getClients.php';
    private clientUrl = 'http://uac-animal.com/emp_Manage/ds-clientDetails.php';
    private addClientUrl = 'http://uac-animal.com/emp_Manage/ds-addClientAPI.php'
    private deleteClientUrl = 'http://uac-animal.com/emp_Manage/ds-deleteClient.php'
    private trashUrl = 'http://uac-animal.com/emp_Manage/ds-trashClients.php';

    getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.clientsUrl);
    }

    getTrashClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.trashUrl);
    }


    getClient(id: string): Observable<ClientDetails> {
        return this.http.get<ClientDetails>(this.clientUrl, { params: {company_id: id} });
    }

    addClient(formData: FormData) {
        return this.http.post<any>(this.addClientUrl, formData);
    }

    deleteClient(id: string) {
        return this.http.post<any>(this.deleteClientUrl, id);
    }

    constructor(private http: HttpClient) { }
}
