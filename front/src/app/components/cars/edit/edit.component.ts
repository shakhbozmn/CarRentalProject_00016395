import { Component, inject, OnInit } from '@angular/core';
import { Car } from '../../../types/Car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../../services/car/car.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  car: Car = {
    id: 0,
    year: null,
    model: '',
    rentalPricePerDay: null,
  };
  route = inject(ActivatedRoute);
  router = inject(Router);
  carService = inject(CarService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
      const carId = Number(id);
      this.carService.getCarById(carId).subscribe(
        (car) => {
          this.car = car; 
        },
        (error) => {
          console.error('Error fetching car:', error);
        }
      );
  }

  onSubmit() {
      this.carService.editCar(this.car).subscribe(
        () => {
          this.router.navigate(['/cars']);
        },
        (error) => {
          console.error('Error updating car:', error);
        }
      );
   
  }
}
