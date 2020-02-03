import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../shared/product-model';

@Component({
  selector: 'app-employee-product',
  templateUrl: './employee-product.component.html',
  styleUrls: ['./employee-product.component.scss']
})
export class EmployeeProductComponent implements OnInit {

  id:string
  products: any[]=[];
  product:ProductModel[]
  flag=false;
  constructor(private productService: EmployeeService  , private route: ActivatedRoute , private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.productService.showproductofemployee(this.id).subscribe(
      products => 

      {
        console.log(products)
        if(products["data"].length !=0)
        {
         
          this.products=products["data"]
          console.log(this.products)
        }
        else
        {
          this.flag=true;
        }
      }
    );

    // this.productService.showproduct().subscribe(
    //   product => {console.log(product["data"])
    //   this.product=product["data"]
    //   }
    // );
  }

}
