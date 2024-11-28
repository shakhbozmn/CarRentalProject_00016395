import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import {  CarAddComponent } from './components/cars/add/add.component';
import { RentalAddComponent } from './components/rental/add/add.component';
import { RentalListComponent } from './components/rental/rental-list/rental-list.component';
import { RentalEditComponent } from './components/rental/edit/edit.component';
import { CarDetailsComponent } from './components/cars/details/details.component';
import { CarEditComponent } from './components/cars/edit/edit.component';
import { RentalDetailsComponent } from './components/rental/details/details.component';

export const routes: Routes = [
    { 
        path: '', component: HomeComponent 
    },
    {
         path: 'cars', component: CarListComponent 
    },
    {
        path: 'rents', component: RentalListComponent
    },
    { 
        path: 'rent/new', component: RentalAddComponent
    },
    {
        path: 'rent/edit/:id',
        component: RentalEditComponent
    },
    {
        path: 'rent/details/:id',
        component: RentalDetailsComponent
    },
    {
        path: 'cars/new',
        component: CarAddComponent
    },
    {
        path: 'cars/edit/:id',
        component: CarEditComponent
    },
    {
        path: 'cars/details/:id',
        component: CarDetailsComponent
    }
];
