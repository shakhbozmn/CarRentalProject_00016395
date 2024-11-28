import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rental } from '../../../types/Rental';
import { Car } from '../../../types/Car';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalService } from '../../../services/rental/rental.service';
import { CarService } from '../../../services/car/car.service';
import { formatDateTime } from '../../../utils/formatDateTime';

@Component({
  selector: 'rental-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class RentalEditComponent implements OnInit{
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

  onSubmit(): void {
    if (!this.rental.customer || !this.rental.customer.id) {
      alert('Invalid customer selected. Please ensure a valid customer is chosen.');
      return;
    }
  
    const formattedRentalDate = new Date(this.rental.rentalDate).toISOString().split('T')[0] + "T00:00:00";
    const formattedReturnDate = new Date(this.rental.returnDate).toISOString().split('T')[0] + "T00:00:00";
  
    const payload: Rental = {
      id: this.rental.id,
      carId: this.rental.carId,
      customer: { ...this.rental.customer },
      rentalDate: formattedRentalDate,
      returnDate: formattedReturnDate,
    };
  
    console.log('Updating rental:', payload);
  
    this.rentalService.editRental(payload).subscribe(
      (response) => {
        console.log('Rental successfully updated:', response);
        alert('Rental successfully updated!');
        this.router.navigate(['/rents']); 
      },
      (error) => {
        console.error('Error updating rental:', error);
        if (error.status === 400) {
          alert('Validation error. Please check your input.');
        } else if (error.status === 500) {
          alert('Server error. Please try again later.');
        } else {
          alert('Error updating rental!');
        }
      }
    );
  }
  
  
}
