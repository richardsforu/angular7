import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products=new Array();

  addProduct(product){
    this.products.push(product);
  }

  listAll(){
    return this.products;
  }


  constructor() { }
}
