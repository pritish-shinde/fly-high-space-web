import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [  // 👈 required for Angular Material animations
    MatTabsModule ,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  selectedIndex = 0;
  intervalId: any;

  slides = [
    'assets/droneimgone.png',
    'assets/droneimgtwo.png',
    'assets/droneimgthree.png'
  ];

  currentIndex = 0;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000); // change image every 3 sec
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
