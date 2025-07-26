import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./Components/navbar/navbar";
import { Footer } from "./Components/footer/footer";
import { Category } from "./Components/home/category/category";
import { Product } from "./Components/home/product/product";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Category, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  }
