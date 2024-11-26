import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsComponent } from "./components/cars/cars.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'car-rental';
}
