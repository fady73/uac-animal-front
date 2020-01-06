import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../shared/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  headers = new HttpHeaders();
  private addProductUrl = 'http://uac-animal.com/emp_Manage/ds-addProduct.php';
  private productsUrl = 'http://uac-animal.com/emp_Manage/ds-products.php';
  private deleteProductUrl = 'http://uac-animal.com/emp_Manage/ds-deleteProduct.php';

  constructor(private http: HttpClient) { }

  uploadproduct(product: FormData) {
    return this.http.post<any>(this.addProductUrl, product);
  }

  getProducts() {
    return this.http.get<any>(this.productsUrl);
  }

  deleteProduct(id: string) {
    return this.http.post<any>(this.deleteProductUrl, id);
  }

  ///laravel

  showproduct(): Observable<object> {
    return this.http.get('http://laravel.uac-animal.com/api/products');
}

addnewproduct(product:ProductModel) {
return this.http.post('http://laravel.uac-animal.com/api/products', product);
}


upload(filedata){ 
  this.headers.append('Accept', 'application/json');
  return this.http.post<any>('http://laravel.uac-animal.com/api/upload/image2', filedata,{headers:this.headers} )};


}
