import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './Components/about/about';
import { Contact } from './Components/contact/contact';
import { Home } from './Components/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home' , component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'productdetails/:id', loadComponent: () => import('./Components/productdetails/productdetails').then(m => m.Productdetails) }
];
