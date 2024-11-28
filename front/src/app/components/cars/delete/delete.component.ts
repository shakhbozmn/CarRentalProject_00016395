import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../../types/Car';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
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
