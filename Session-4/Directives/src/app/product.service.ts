import { Injectable } from '@angular/core';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    {id:12,name:"Pencil",available:"22-10-2021",price:10.23,rating:4.5},
    {id:12,name:"Pen",available:"22-10-2021",price:25.23,rating:4.0},
    {id:12,name:"Eraser",available:"22-10-2021",price:3.5,rating:4.2},
    {id:12,name:"Scale",available:"22-10-2021",price:15.23,rating:4.8}
  ];
  constructor() { }

  getProducts(){
    return this.products;
  }
}
