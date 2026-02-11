import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="portfolio section">
      <div class="container">
        <div class="section-header text-center">
          <h2>Our Portfolio</h2>
          <p class="section-subtitle">Recent projects we're proud of</p>
        </div>

        <div class="grid grid-2">
          <div *ngFor="let project of projects" class="portfolio-card">
            <div class="portfolio-image">
              <div class="image-placeholder">{{ project.image }}</div>
            </div>
            <div class="portfolio-content">
              <span class="project-category">{{ project.category }}</span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <a href="#" class="portfolio-link">View Project →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'Residential',
      description: 'A contemporary living room with custom furniture, accent lighting, and a soothing color palette for a cozy family space.',
      image: '🛋️'
    },
    {
      id: 2,
      title: 'Luxury Modular Kitchen',
      category: 'Kitchen',
      description: 'A modular kitchen featuring smart storage, premium finishes, and ergonomic design for efficient cooking.',
      image: '🍽️'
    },
    {
      id: 3,
      title: 'Elegant Pooja Room',
      category: 'Spiritual',
      description: 'A serene pooja room with intricate woodwork, ambient lighting, and traditional decor elements.',
      image: '🛕'
    },
    {
      id: 4,
      title: 'Office Workspace Design',
      category: 'Commercial',
      description: 'A modern office space with open workstations, collaborative zones, and biophilic design for productivity.',
      image: '💼'
    }
  ];
}
