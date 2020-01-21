import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../shared/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
    employees: any[]=[];
    selectedEmployee: Employee;
    filterText = '';

    constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }
    ngOnInit() {
        // this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
        this.employeeService.showemployees().subscribe(
          
          employees =>{
            console.log(employees)
            this.employees = employees["data"]
          }
          
          );
  }

    onSelect(employee: Employee) {
        this.selectedEmployee = employee;
    }

    onDelete(id: string) {
      if (confirm('هل تريد الحذف نهائى؟ ')) {
        this.employees = this.employees.filter(
          employee => employee.id !== id
        );
        this.employeeService.deleteEmployee(id).subscribe(
            (response) => {
              console.log(response);
          },
          (error) => console.log(error)
        );
       }
    }

    onTrash() {
      this.employeeService.getTrashEmployees().subscribe(
        employees => this.employees = employees
        );
    }

    allEmployees() {
      this.employeeService.getEmployees().subscribe(
        employees => this.employees = employees
        );
    }
}
