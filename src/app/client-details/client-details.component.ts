import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ClientService } from '../services/client.service';
import { ClientDetails } from '../shared/clientDetails';

@Component({
    selector: 'app-client-details',
    templateUrl: './client-details.component.html',
    styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
    client: ClientDetails;
    filterText = '';
    dateFilter = '';
    comments = [];

    constructor(private clientService: ClientService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        this.route.params
            .pipe(switchMap(
                (params: Params) => this.clientService.getClient(params['id'])))
            .subscribe(client => {
                this.client = client;
                this.comments = this.client[1].Comments;
             });
    }

    goBack() {
        this.location.back();
    }

}
