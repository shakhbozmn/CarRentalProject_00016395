import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,  MatDialogModule,
    MatButtonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'car-rental';
  router = inject(Router);
  homeClick() {
    console.log('Home Clicked');
    this.router.navigate(['']);
  }
  seeAllCarsClick() {
    console.log('See All Clicked');
    this.router.navigate(['cars']);
  }

  addRentClick() {
    console.log('Rent Clicked');
    this.router.navigate(['rent/new']);
  }

  seeRentsClick() {
    console.log('Rents Clicked');
    this.router.navigate(['rents']);
  }
}
