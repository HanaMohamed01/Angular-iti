import { Component } from '@angular/core';
import { Category } from './category/category';
import { Product } from './product/product';
@Component({
  selector: 'app-home',
  imports: [Category , Product],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
