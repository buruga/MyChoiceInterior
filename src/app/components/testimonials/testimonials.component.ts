import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  message: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="testimonials section bg-light">
      <div class="container">
        <div class="section-header text-center">
          <h2>Client Testimonials</h2>
          <p class="section-subtitle">What our clients say about us</p>
        </div>

        <div class="grid grid-3">
          <div *ngFor="let testimonial of testimonials" class="testimonial-card">
            <div class="rating">
              <span *ngFor="let star of getStars(testimonial.rating)" class="star">⭐</span>
            </div>
            <p class="testimonial-message">"{{ testimonial.message }}"</p>
            <div class="testimonial-author">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sri Ram',
      company: 'Hyderabad',
      message: 'The design of each and every area of our house was just looking like awesome.....I am very very much satisfied with the efforts,suggestions for the best output...Very satisfied with the timely completion of the work.Thank you so much Rajesh garu you made our house so excellent',
      rating: 5
    },
    {
      id: 2,
      name: 'Pawan Kumar',
      company: 'Madhapur, Hyderabad',
      message: 'Thank you so much for your thorough support and making my home special with a great looking..Always as I mentioned, works speak more than words.. hence proved..Hope you will continue to do that other clients 🙏',
      rating: 5
    },
    {
      id: 3,
      name: 'Sukumar',
      company: 'Hitech City, Hyderabad',
      message: 'The user experience they designed was outstanding. Our customers love the new designs.',
      rating: 5
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
