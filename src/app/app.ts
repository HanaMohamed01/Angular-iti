import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Navbar } from "./Components/navbar/navbar";
import { Footer } from "./Components/footer/footer";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  }
