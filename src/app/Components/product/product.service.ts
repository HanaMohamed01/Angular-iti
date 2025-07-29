import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [
    { id: 1, name: "Wallpaper", price: 10000, imageUrl: "/4.jpg" },
    { id: 2, name: "image", price: 10000, imageUrl: "/4.jpg" },
    { id: 3, name: "Art", price: 10000, imageUrl: "/9.jpg" },
    { id: 4, name: "Wallpaper", price: 10000, imageUrl: "/9.jpg" },
    { id: 5, name: "Art", price: 10000, imageUrl: "/4.jpg" },
    { id: 6, name: "image", price: 10000, imageUrl: "/9.jpg" },
    
  ];

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductbyId(id: number): IProduct | undefined {
    return this.products.find(product => product.id == id);
  }
}

