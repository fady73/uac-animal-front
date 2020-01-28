import { Component, OnInit } from '@angular/core';
import { Target } from '../shared/target';
import { TargetService } from '../services/target.service';
import { EmployeeService } from '../services/employee.service';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {
start:string
end:string
  target: any[]=[];
  item:Target=new Target()
 result:any[]
    filterText = '';
id:string
    constructor(private targetService: TargetService , private employee:EmployeeService , private product:ProductsService , private route: ActivatedRoute) { }
    ngOnInit() {
        // this.employeeService.getEmployees().subscribe(employees => this.employees = employees);

        this.route.paramMap.subscribe(params => {
          this.id = params.get('id');
          this.targetService.showtargetbyid(this.id).subscribe(
          
            target =>{
           
              this.target = target["data"]
              console.log(this.target)
            //  this.target.forEach(element => {
            //    this.employee.getEmployee(element.employee_id.toString()).subscribe( response=>
            //    {
            //            console.log(response[0].name)
            //            element.employee_name=response[0].name
            //    });
  
  
            //  });
             
            }
            
            );
       
        });
   


  }

  submit()
{
  this.targetService.showtargetbydate(this.id,this.start,this.end).subscribe(
          
    target =>{
   
      this.target = target["data"]
      console.log(this.target)
    //  this.target.forEach(element => {
    //    this.employee.getEmployee(element.employee_id.toString()).subscribe( response=>
    //    {
    //            console.log(response[0].name)
    //            element.employee_name=response[0].name
    //    });


    //  });
     
    }
    
    );
  }
 

}
