import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductModel } from '../shared/product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[]=[];
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.showproduct().subscribe(
      products => {
        console.log(products)
        this.products = products["data"]
      
      }
    );
  }

  onDelete(id: string) {
    console.log(id);
    if (confirm('هل تريد الحذف نهائى؟ ')) {
      this.products = this.products.filter(
        product => product.id !== id
      );
      this.productService.deleteProduct(id).subscribe(
          (response) => {
            console.log(response);
        },
        (error) => console.log(error)
      );
    }
  }

}
