import { Component, inject } from '@angular/core';
import { RentalService } from '../../../services/rental/rental.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Rental } from '../../../types/Rental';
import { Car } from '../../../types/Car';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarService } from '../../../services/car/car.service';
import { formatDateTime } from '../../../utils/formatDateTime';

@Component({
  selector: 'rental-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class RentalDetailsComponent {
  rental: Rental = {
    id: 0,
    carId: 0,
    car: { id: 0, model: '', year: 0, rentalPricePerDay: 0 },
    customer: { id: 0, name: '', email: '', phoneNumber: '' },
    rentalDate: '',
    returnDate: ''
  };

  cars: Car[] = [];

  route = inject(ActivatedRoute);
  router = inject(Router);
  rentalService = inject(RentalService);
  carService = inject(CarService);
  formatDateTime = formatDateTime;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const rentalId = Number(id);

    this.rentalService.getRentalById(rentalId).subscribe(
      (rental) => {
        rental.rentalDate = this.formatDateTime(rental.rentalDate);
        rental.returnDate = this.formatDateTime(rental.returnDate);
        this.rental = rental;
      },
      (error) => {
        console.error('Error fetching rental:', error);
      }
    );

    this.carService.getCars().subscribe(
      (data: Car[]) => {
        this.cars = data;
        console.log('Cars fetched successfully:', this.cars);
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }
}
