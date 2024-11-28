import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Car } from '../../../types/Car';

@Component({
  selector: 'car-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class CarDeleteComponent {
  @Input() car!: Car;

  @Output() onDeleteConfirmed = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  confirmDelete() {
    this.onDeleteConfirmed.emit();
  }

  closeModal() {
    this.onCancel.emit();
  }
}
