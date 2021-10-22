import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //service initialized
  constructor(private service:ProductService) { }

  products:Product[]=this.service.getProducts();
 
  ngOnInit(): void {
  }

}
