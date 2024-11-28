import { Car } from "./Car";
import { Customer } from "./Customer";

export interface Rental {
    id: number;
    carId: number;
    car?: Car;
    customer: Customer;
    rentalDate: string;
    returnDate: string;
  }