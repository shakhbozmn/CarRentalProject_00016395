import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../../types/Car';
import { CarService } from '../../../services/car/car.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
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
}