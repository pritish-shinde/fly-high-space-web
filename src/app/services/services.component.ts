import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],

  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  features = [
    {
      icon: 'fa-solid fa-drone',
      title: 'Drone Surveillance',
      description: 'Monitor your fields with advanced drone technology for better crop management and security.'
    },
    {
      icon: 'fa-solid fa-seedling',
      title: 'Precision Agriculture',
      description: 'Utilize data-driven insights to optimize crop yield and reduce resource wastage.'
    },
    {
      icon: 'fa-solid fa-cloud-sun',
      title: 'Weather Monitoring',
      description: 'Get real-time weather updates and forecasts tailored for your farm location.'
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Analytics Dashboard',
      description: 'Visualize farm data and make informed decisions with our easy-to-use dashboard.'
    }
  ];

  scrollToServices() {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
   openWhatsApp() {
    window.open('https://wa.me/918999274775?text=Hello!%20I%20am%20interested%20in%20your%20drone%20products', '_blank');
  }
}
