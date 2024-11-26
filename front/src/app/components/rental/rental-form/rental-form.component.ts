import { Component} from '@angular/core';
import { Rental } from '../../../types/Rental';
import { RentalService } from '../../../services/rental/rental.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rental-form',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.scss'
})
export class RentalFormComponent {
  rental: Rental = {
    id: 0,
    carId: 0,
    customerId: 0,
    rentalDate: '',
    returnDate: '',
    totalCost: 0,
  };

  constructor(private rentalService: RentalService) {}

  onSubmit() {
    this.rentalService.addRental(this.rental).subscribe((response) => {
      console.log('Rental successfully created', response);
    });
  }
}
