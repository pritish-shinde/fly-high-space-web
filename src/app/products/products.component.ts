import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [MatButton, MatIcon]
})
export class ProductsComponent {
    openWhatsApp() {
    window.open('https://wa.me/918999274775?text=Hello!%20I%20am%20interested%20in%20your%20drone%20products', '_blank');
  }
}
