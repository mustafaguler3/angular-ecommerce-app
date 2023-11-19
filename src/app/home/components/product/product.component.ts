import { Component } from '@angular/core';
import { Product } from '../types/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: Product[] = [];

  constructor(private productService: ProductService){
    this.products = this.productService.getProducts();
  }
}
