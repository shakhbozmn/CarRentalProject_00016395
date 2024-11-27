import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { RentalFormComponent } from './components/rental/rental-form/rental-form.component';
import { CarFormComponent } from './components/cars/car-form/car-form.component';
import path from 'path';

export const routes: Routes = [
    { 
        path: '', component: HomeComponent 
    },
    {
         path: 'cars', component: CarListComponent 
    },
    { 
        path: 'rent', component: RentalFormComponent 
    },
    {
        path: 'cars/:id',
        component: CarFormComponent
    },
    {
    path: 'cars/new',
    component: CarFormComponent
    }
];
