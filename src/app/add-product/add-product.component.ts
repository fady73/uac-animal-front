import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModel } from '../shared/product-model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @ViewChild('fileInput') el: ElementRef;
  selectedFile: File = null;
  productForm: FormGroup;

  fileData: File = null;
  uploadedFile: string 
  filedata:any;
product:ProductModel=new ProductModel();

  constructor(private productService: ProductsService,
    private fb: FormBuilder,
    private router: Router) {
      this.createForm();
     }

  ngOnInit() {}

  createForm() {
    this.productForm = this.fb.group({
      name:'',
      url: [''],
      price: '',
      desc: ''
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
   this.productForm.get('url').setValue(this.selectedFile)
    var myFormData = new FormData();
    console.log(this.selectedFile)
     myFormData.append('image',this.productForm.get('url').value);

  this.productService.upload(myFormData).subscribe(response => {
 console.log(response["data"])
  this.uploadedFile=response["data"]
    
}); 
  }

  onSubmit() {

    this.product.name=this.productForm.get('name').value;
    this.product.price=this.productForm.get('price').value;
    this.product.description=this.productForm.get('desc').value;
    this.product.url="http://laravel.uac-animal.com/"+this.uploadedFile;
    console.log(this.product)
    this.productService.addnewproduct(this.product).subscribe(
          (response) => {
            alert('تم اضافة منتج جديد');
              console.log(response);
              this.router.navigate(['/products']);
           },
        (error) => console.log(error)
      );
    // const fd = new FormData();
    // fd.append('url', this.productForm.get('url').value);
    // fd.append('price', this.productForm.get('price').value);
    // fd.append('desc', this.productForm.get('desc').value);

    // this.productService.uploadproduct(fd).subscribe(
    //     (response) => {
    //       alert('تم اضافة منتج جديد');
    //         console.log(response);
    //         this.router.navigate(['/products']);
    //      },
    //   (error) => console.log(error)
    // );
  }

}
