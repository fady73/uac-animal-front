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
    constructor(private employeeService: EmployeeService) { }
    
    ngOnInit() {
        this.employees = this.employeeService.getEmployees();
  }

    onSelect(employee: Employee) {
        this.selectedEmployee = employee;
    }
}
