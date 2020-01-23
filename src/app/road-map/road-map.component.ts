import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  id:string
  constructor(private employeeService: EmployeeService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.employeeService.roadmapofemployee(this.id)
      .subscribe(employee => {
        console.log(employee);
        // this.employee = employee;
        this.visits=employee["data"]["visited"]
        this.novisit=employee["data"]["notVisited"]
      
      });
    });
    // this.allEmployees();
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
 console.log("kjkj")
    this.employeeService.roadmap(this.id,this.start,this.end).subscribe(
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
