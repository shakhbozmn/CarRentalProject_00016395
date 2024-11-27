import { Component, inject } from '@angular/core';
import { Car } from '../../../types/Car';
import { CarService } from '../../../services/car/car.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {
  carService = inject(CarService)
  cars: Car[] = []; 
  router = inject(Router)

  ngOnInit(): void {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }

  addCar() {
    this.router.navigate(['/cars/new']);
  }

  editCar(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }

  deleteCar(car: Car) {
    this.carService.deleteCar(car.id).subscribe(() => {
      this.cars = this.cars.filter((c) => c.id !== car.id);
    });
  }
}
