import { Injectable } from '@angular/core';
import { Product } from '../components/types/product';
import { products } from '../components/data/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[]{
    return products;
  }
}
