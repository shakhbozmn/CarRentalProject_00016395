import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from '../../types/Rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  private apiUrl = 'https://localhost:7167/api/Rental'; // Update to match your API

  constructor(private http: HttpClient) {}

  addRental(rental: Rental): Observable<Rental> {
    return this.http.post<Rental>(this.apiUrl, rental);
  }
}