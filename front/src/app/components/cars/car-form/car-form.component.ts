import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../../types/Car';
import { CarService } from '../../../services/car/car.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.scss',
  providers: [CarService]
})
export class CarFormComponent implements OnInit {
  car: Car = {
    id: 0,
    year: null,
    model: '',
    rentalPricePerDay: null,
  };
  isEditMode = false;
  route = inject(ActivatedRoute);
  router = inject(Router);
  carService = inject(CarService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.isEditMode = true; 
      const carId = Number(id);
      this.carService.getCarById(carId).subscribe(
        (car) => {
          this.car = car; 
        },
        (error) => {
          console.error('Error fetching car:', error);
        }
      );
    } else {
      this.isEditMode = false;
      this.resetForm(); 
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.carService.editCar(this.car).subscribe(
        () => {
          this.router.navigate(['/cars']);
        },
        (error) => {
          console.error('Error updating car:', error);
        }
      );
    } else {
      this.carService.createCar(this.car).subscribe(
        () => {
          this.router.navigate(['/cars']);
        },
        (error) => {
          console.error('Error creating car:', error);
        }
      );
    }
  }

  resetForm() {
    this.car = {
      id: 0,
      year: null,
      model: '',
      rentalPricePerDay: null,
    };
  }
  }
