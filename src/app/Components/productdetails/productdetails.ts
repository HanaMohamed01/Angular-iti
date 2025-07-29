import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductDetailsService } from './details.service';
import { IProduct } from '../product/iproduct';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyPipe],
  templateUrl: './productdetails.html',
  styleUrls: ['./productdetails.css']
})
export class Productdetails implements OnInit {
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private productDetailsService: ProductDetailsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Product ID from route:', id);
    this.product = this.productDetailsService.getProductbyId(id);
    console.log('Product fetched:', this.product);
  }
}
