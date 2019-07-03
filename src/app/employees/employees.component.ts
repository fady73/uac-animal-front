import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../shared/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
    employees: Employee[];
    selectedEmployee: Employee;
    filterText:string='';

    constructor(private employeeService: EmployeeService) { }
    
    ngOnInit() {
        this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

    onSelect(employee: Employee) {
        this.selectedEmployee = employee;
    }
}
