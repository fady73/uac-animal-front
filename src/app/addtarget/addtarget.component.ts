import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ProductsService } from '../services/products.service';
import { TargetService } from '../services/target.service';
import { Target } from '../shared/target';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addtarget',
  templateUrl: './addtarget.component.html',
  styleUrls: ['./addtarget.component.scss']
})
export class AddtargetComponent implements OnInit {
employees:any;
products:any
target:Target=new Target()
date:string
employee:number
product:number
Target:number
  constructor(private employeeService: EmployeeService , private productService: ProductsService , private targetService: TargetService,  private router: Router) { }

  ngOnInit() {
    this.allEmployees();
    this.allproduct();
  }
  allEmployees() {
    this.employeeService.showemployees().subscribe(
          
      employees =>{
        console.log(employees)
        this.employees = employees["data"]
      }
      
      );
  }

  allproduct()
  {
    this.productService.showproduct().subscribe(
      products => {
        console.log(products)
        this.products = products["data"]
      
      }
    );
  }

  submit()
  {
    this.target.date=this.date
    this.target.employee_id=this.employee
    this.target.product_id=this.product
    this.target.target=this.Target
    this.targetService.addtarget(this.target).subscribe(
      data => {
          console.log(data);
          if (data["status"]=="success") {
              alert('تم اضافة تارجت جديد الى قاعدة البيانات');
            this.router.navigate(['/target']);
                
              }
          else {
              alert(' خطا فى البيانات');
     }
         
      },
      (error) => console.log(error)
  );
  }
}
