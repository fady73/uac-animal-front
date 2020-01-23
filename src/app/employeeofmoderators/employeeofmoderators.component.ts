import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';
import { ModeratorService } from '../services/moderator.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeeofmoderators',
  templateUrl: './employeeofmoderators.component.html',
  styleUrls: ['./employeeofmoderators.component.scss']
})
export class EmployeeofmoderatorsComponent implements OnInit {
  employees: any[]=[];
  selectedEmployee: Employee;
  filterText = '';
  flag=false;
id:string;
  constructor(private Service: ModeratorService, private employeeService:EmployeeService,  private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.Service.getemployee(this.id)
      .subscribe(employee => {
        console.log(employee);
          this.employees=employee["data"]
          if(this.employees.length==0)
          {
            this.flag=true
          }
      
      });
    });
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
