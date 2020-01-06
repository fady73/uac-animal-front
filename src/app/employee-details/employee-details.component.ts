import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

import { Employee } from '../shared/employee';
import { EmployeeDetails } from '../shared/employeeDetails';

import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
    employee: EmployeeDetails;
    id: string;
    filterText = '';
    dateFilter = '';
    trackingLink: string;
   trackDate: Date = new Date();

    constructor(private employeeService: EmployeeService,
                private route: ActivatedRoute,
                private location: Location) { }

    ngOnInit() {
        this.route.params
            .pipe(switchMap((params: Params) => this.employeeService.getEmployee(params['id'])))
            .subscribe(employee => {
              console.log(this.employee = employee);
              console.log(this.employee[1].Comments);
            });

            this.route.params.subscribe(params => {
              this.id = params['id'];
              console.log(params);
              console.log(params['id']);
            });
    }

    tracking() {
      const fd = new FormData();
      const date = new Date(this.trackDate);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      fd.append('id', this.id);
      fd.append('day', day.toString());
      fd.append('month', month.toString());
      fd.append('year', year.toString());

      console.log(day + ' ' + month + ' ' + year);
      this.employeeService.getTrack(fd).subscribe(
        res => {
        this.trackingLink = res['url'];
        console.log(res['url']);
        }
      );
    }
}
