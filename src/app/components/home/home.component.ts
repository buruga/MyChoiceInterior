import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section id="home" class="home section">
    <div class="home-slider-container">
      <div class="slider">
        <div *ngFor="let img of images; let i = index" class="slide" [style.display]="currentIndex === i ? 'block' : 'none'">
          <img [src]="img" class="slide-img" alt="Home Slide {{i+1}}" />
        </div>
        <button class="slider-btn prev" (click)="prevSlide()">&#10094;</button>
        <button class="slider-btn next" (click)="nextSlide()">&#10095;</button>
      </div>
      <div class="slider-dots">
        <span *ngFor="let img of images; let i = index" class="dot" [class.active]="currentIndex === i" (click)="goToSlide(i)"></span>
      </div>
    </div>
</section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  images = [
   '/assets/Hall01.jpg',
    '/assets/Hall02.jpg',
    '/assets/Hall03.jpeg',
    '/assets/Hall04.jpg',
    '/assets/Hall05.jpg',
    '/assets/kitechen01.jpg',
    '/assets/kitechen02.jpeg',
    '/assets/kitechen03.jpeg',
    '/assets/kitechen04.jpg',
    '/assets/Office-01.jpg',
    '/assets/Office-02.jpg',
    '/assets/Office-03.jpg',
    '/assets/Office-04.jpg',
    '/assets/pooja-1.jpg',
    '/assets/pooja-2.jpg',
    '/assets/pooja-3.jpg',
    '/assets/pooja-4.jpg',
    '/assets/Wardrobe01.jpg',
    '/assets/Wardrobe02.jpeg',
    '/assets/Wardrobe03.jpg'
  ];
  currentIndex = 0;
  private intervalId: any;
  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2000); // Change slide every 4 seconds
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
