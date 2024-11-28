import { Component, inject } from '@angular/core';
import { Car } from '../../../types/Car';
import { CarService } from '../../../services/car/car.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarDeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, CarDeleteComponent],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'], 
})
export class CarListComponent {

  carService = inject(CarService);
  router = inject(Router);

  cars: Car[] = [];
  loading: boolean = false;
  selectedCar: Car | null = null; 

  ngOnInit(): void {
    this.loading = true; 
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
      this.loading = false; 
    });
  }

  addCar() {
    this.router.navigate(['/cars/new']);
  }

  editCar(car: Car) {
    this.router.navigate(['/cars/edit', car.id]);
  }

  viewCarDetails(car: Car) {
    this.router.navigate(['/cars/details', car.id]);
  }

  openDeleteModal(car: Car) {
    this.selectedCar = car; 
  }

  handleDeleteConfirmed() {
    if (this.selectedCar) {
      this.carService.deleteCar(this.selectedCar.id).subscribe(() => {
        this.cars = this.cars.filter((c) => c.id !== this.selectedCar?.id);
        this.selectedCar = null;
      });
    }
  }

  handleDeleteCancelled() {
    this.selectedCar = null; 
  }
}
