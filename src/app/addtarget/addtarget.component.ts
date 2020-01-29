import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ProductsService } from '../services/products.service';
import { TargetService } from '../services/target.service';
import { Target } from '../shared/target';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addtarget',
  templateUrl: './addtarget.component.html',
  styleUrls: ['./addtarget.component.scss']
})
export class AddtargetComponent implements OnInit {
employees:any;
products:any
target:Target=new Target()
datefrom:string
dateto:string
employee:number
product:number
Target:number
id:number
  constructor(private employeeService: EmployeeService , private route:ActivatedRoute , private productService: ProductsService , private targetService: TargetService,  private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt( params.get('id'));
   
    });
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
    this.target.date_from=this.datefrom
    this.target.date_to=this.dateto
    this.target.employee_id=this.id
    this.target.product_id=this.product
    this.target.target=this.Target
    console.log(this.target)
    this.targetService.addtarget(this.target).subscribe(
      data => {
          console.log(data);
          if (data["status"]=="success") {
              alert('تم اضافة تارجت جديد الى قاعدة البيانات');
            this.router.navigate([`/target/${this.id}`]);
                
              }
          else {
              alert(' خطا فى البيانات');
     }
         
      },
      (error) => console.log(error)
  );
  }
}
