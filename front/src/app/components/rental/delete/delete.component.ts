import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rental } from '../../../types/Rental';

@Component({
  selector: 'rental-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class RentalDeleteComponent {
@Input() rental!: Rental;

@Output() onDeleteConfirmed = new EventEmitter<void>();
@Output() onCancel = new EventEmitter<void>();

confirmDelete() {
  this.onDeleteConfirmed.emit();
}

closeModal() {
  this.onCancel.emit();
}
}
