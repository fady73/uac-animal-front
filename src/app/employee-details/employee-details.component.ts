import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from '../shared/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
     employee: Employee;
    filterText: string = '';
    constructor(private employeeService: EmployeeService,
                private route: ActivatedRoute,
                private location: Location) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];

        this.employeeService.getEmployee(id).subscribe(employee => this.employee = employee);
    }

}
