import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-road-map',
  templateUrl: './road-map.component.html',
  styleUrls: ['./road-map.component.scss']
})
export class RoadMapComponent implements OnInit {
  employees:any;
  start:string
  end:string
  employee:number
  visits:any[]
  novisit:any[]
  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit() {
    this.allEmployees();
  }
  allEmployees() {
    this.employeeService.showemployees().subscribe(
          
      employees =>{
        console.log(employees)
        this.employees = employees["data"]
      }
      
      );
  }

  submit()
  {
 
    this.employeeService.roadmap(this.employee,this.start,this.end).subscribe(
      data => {
          console.log(data);
         
         this.visits=data["visited"]
         this.novisit=data["notVisited"]
      },
      (error) => console.log(error)
  );
  }

}
