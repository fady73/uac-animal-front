import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { RoadModel } from '../road-model';

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
  visits:RoadModel[]
  novisit:RoadModel[]
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
      response => {
          console.log(response);
         
         this.visits=response["data"]["visited"]
         this.novisit=response["data"]["notVisited"]
        
        //  console.log(this.visits[0]["companies"]["name"])
         console.log(this.novisit)
      },
      (error) => console.log(error)
  );
  }

}
