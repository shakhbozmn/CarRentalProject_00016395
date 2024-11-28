import { Component, inject } from '@angular/core';
import { RentalService } from '../../../services/rental/rental.service';
import { Router } from '@angular/router';
import { Rental } from '../../../types/Rental';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RentalDeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-rental-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RentalDeleteComponent],
  templateUrl: './rental-list.component.html',
  styleUrl: './rental-list.component.scss'
})
export class RentalListComponent {

  rentalService = inject(RentalService);
  router = inject(Router);

  rentals: Rental[] = [];
  loading: boolean = false;
  selectedRental: Rental | null = null;

  ngOnInit(): void {
    this.loading = true; 
    this.rentalService.getRentals().subscribe((data) => {
      this.rentals = data;
      this.loading = false; 
    });
  }

  addRental() {
    this.router.navigate(['/rent/new']);
  }

  editRental(rental: Rental) {
    this.router.navigate(['/rent/edit', rental.id]);
  }

  viewRentalDetails(rental: Rental) {
    this.router.navigate(['/rent/details', rental.id]);
  }

  openDeleteModal(rental: Rental) {
    this.selectedRental = rental; 
  }

  handleDeleteConfirmed() {
    if (this.selectedRental) {
      this.rentalService.deleteRental(this.selectedRental.id).subscribe(() => {
        this.rentals = this.rentals.filter((r) => r.id !== this.selectedRental?.id);
        this.selectedRental = null;
      });
    }
  }

  handleDeleteCancelled() {
    this.selectedRental = null; 
  }
}
