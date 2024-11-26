import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'car-rental';
  router = inject(Router);
  HomeClick() {
    console.log('Home Clicked');
    this.router.navigate(['']);
  }
  SeeAllClick() {
    console.log('See All Clicked');
    this.router.navigate(['cars']);
  }
  RentClick() {
    console.log('Rent Clicked');
    this.router.navigate(['rent']);
  }
}
