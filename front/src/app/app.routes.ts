import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { RentalFormComponent } from './components/rental/rental-form/rental-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarListComponent },
    { path: 'rent', component: RentalFormComponent },
];