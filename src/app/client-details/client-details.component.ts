import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Client } from '../shared/client';
import { ClientService } from '../services/client.service';

@Component({
    selector: 'app-client-details',
    templateUrl: './client-details.component.html',
    styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
    client: Client;
    filterText: string = '';

    constructor(private clientService: ClientService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        this.route.params
            .pipe(switchMap((params: Params) => this.clientService.getClient(params['id'])))
            .subscribe(employee => this.client = employee);
    }

    goBack() {
        this.location.back();
    }

}
