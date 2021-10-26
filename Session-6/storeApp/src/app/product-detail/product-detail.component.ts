import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { LoggingService } from '../services/logging.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  product:Product;
  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    //console.log(this.id);
    this.product=this.productsService.getProduct(this.id);

  }

  onEdit() {
   // this.router.navigate(['/products', this.id, 'edit']); // http://localhost:4200/products/1/edit
    this.loggingService.logMessage('Product Detail - Edit button clicked.');
  }

  onDelete() {
    this.loggingService.logMessage('Product Detail - Delete button clicked.');
  }
}

