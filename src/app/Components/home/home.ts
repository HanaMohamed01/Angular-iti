import { Component } from '@angular/core';
import { Category } from '../category/category';
import { ProductComponent } from '../product/product';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Category, ProductComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
