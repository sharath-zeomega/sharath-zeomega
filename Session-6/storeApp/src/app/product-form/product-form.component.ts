import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { LoggingService } from '../services/logging.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product;
  id: number;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.id=this.route.snapshot.params['id'];
    this.product = this.productsService.getProduct(this.id);
    // this.route.paramMap.subscribe((map) => {
    //   this.id = +map.get('id');
    //   this.product = this.productsService.getProduct(this.id);
    // });
  }

  onSave() {
    this.loggingService.logMessage('Product Form - Save button clicked.');
    this.productsService.updateProduct(this.id, this.product);
    this.router.navigate(['/products']);
  }
}

