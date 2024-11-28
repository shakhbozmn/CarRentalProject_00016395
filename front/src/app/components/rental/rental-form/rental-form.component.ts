import { Component, OnInit} from '@angular/core';
import { Rental } from '../../../types/Rental';
import { RentalService } from '../../../services/rental/rental.service';
import { FormsModule } from '@angular/forms';
import { CarService } from '../../../services/car/car.service';
import { Car } from '../../../types/Car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rental-form',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.scss'
})
export class RentalFormComponent implements OnInit {
  rental: Rental = {
    id: 0,
    carId: 0,
    car: { id: 0, model: '', year: 0, rentalPricePerDay: 0 },
    customer: { id: 0, name: '', email: '', phoneNumber: '' },
    rentalDate: '',
    returnDate: ''
  };

  cars: Car[] = []; 

  constructor(private rentalService: RentalService, private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe(
      (data: Car[]) => {
        this.cars = data; 
        console.log('Cars fetched successfully:', this.cars); // Debugging log
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }

  onSubmit(): void {
    const payload: Rental = {
      ...this.rental,
      car: this.cars.find((c) => c.id === this.rental.carId) || { id: 0, model: '', year: 0, rentalPricePerDay: 0 },
      customer: this.rental.customer
    };

    this.rentalService.addRental(payload).subscribe(
      (response) => {
        console.log('Rental successfully created:', response);
        alert('Rental successfully created!');
      },
      (error) => {
        console.error('Error creating rental:', error);
        alert('Failed to create rental. Please try again.');
      }
    );
  }
}
