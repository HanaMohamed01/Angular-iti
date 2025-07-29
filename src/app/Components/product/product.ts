import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './iproduct';
import { Productdetails } from '../productdetails/productdetails';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule, Productdetails],
  providers: [ProductService],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}

