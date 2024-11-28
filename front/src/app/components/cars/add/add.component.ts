import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../../types/Car';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CarService } from '../../../services/car/car.service';

@Component({
  selector: 'car-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class CarAddComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  carService = inject(CarService);
  car: Car = {
    id: 0,
    year: null,
    model: '',
    rentalPricePerDay: null,
  };

  ngOnInit(): void {
      this.resetForm(); 
  }

  onSubmit() {
      this.carService.createCar(this.car).subscribe(
        () => {
          this.router.navigate(['/cars']);
        },
        (error) => {
          console.error('Error creating car:', error);
        }
      );
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
