import { Component, OnInit } from '@angular/core';
import { Target } from '../shared/target';
import { TargetService } from '../services/target.service';
import { EmployeeService } from '../services/employee.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {

  target: Target[]=[];
  item:Target=new Target()
 result:any[]
    filterText = '';

    constructor(private targetService: TargetService , private employee:EmployeeService , private product:ProductsService) { }
    ngOnInit() {
        // this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
        this.targetService.showtarget().subscribe(
          
          target =>{
            console.log(target)
            this.target = target["data"]
            console.log(this.target)
            // this.target.forEach(element => {
            //   console.log(element.employee)
            //    this.item.target=element.target
            //    this.item.employee_name=element.employee.name
            //    this.item.date=element.date
            //    this.item.product_id=element.product_id

            //    this.result.push(this.item)
            // });
          }
          
          );


  }

  

 

}
