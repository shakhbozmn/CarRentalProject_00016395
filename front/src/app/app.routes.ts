import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { RentalFormComponent } from './components/rental/rental-form/rental-form.component';
import { EditComponent } from './components/cars/edit/edit.component';
import { AddComponent } from './components/cars/add/add.component';
import { DetailsComponent } from './components/cars/details/details.component';

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
        path: 'cars/new',
        component: AddComponent
    },
    {
        path: 'cars/edit/:id',
        component: EditComponent
    },
    {
        path: 'cars/details/:id',
        component: DetailsComponent
    }
];
