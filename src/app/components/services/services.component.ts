import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services section bg-light">
      <div class="container">
        <div class="section-header text-center">
          <h2>Our Services</h2>
          <p class="section-subtitle">Comprehensive solutions tailored to your business needs</p>
        </div>

        <div class="grid grid-3">
          <div *ngFor="let service of services" class="service-card">
            <div class="service-icon">
              {{ service.icon }}
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Residential Interior Design',
      description: 'Personalized home interiors including living rooms, bedrooms, kitchens, and more, tailored to your lifestyle and taste.',
      icon: '🏠'
    },
    {
      id: 2,
      title: 'Commercial Interior Design',
      description: 'Functional and stylish office, retail, and hospitality spaces that enhance productivity and brand image.',
      icon: '🏢'
    },
    {
      id: 3,
      title: 'Modular Kitchen Design',
      description: 'Custom modular kitchens with smart storage, modern finishes, and ergonomic layouts.',
      icon: '🍽️'
    },
    {
      id: 4,
      title: 'Wardrobe & Storage Solutions',
      description: 'Innovative wardrobe and storage designs to maximize space and organization.',
      icon: '🗄️'
    },
    {
      id: 5,
      title: 'False Ceiling & Lighting',
      description: 'Creative false ceiling concepts and lighting solutions for ambiance and functionality.',
      icon: '💡'
    },
    {
      id: 6,
      title: 'Pooja Room Design',
      description: 'Elegant and serene pooja room and mandir designs for your home.',
      icon: '🛕'
    },
    {
      id: 7,
      title: 'Office & Workspace Design',
      description: 'Modern office and workspace interiors that boost efficiency and comfort.',
      icon: '💼'
    },
    {
      id: 8,
      title: 'Renovation & Remodeling',
      description: 'Transform and upgrade your existing spaces with expert renovation and remodeling services.',
      icon: '🔨'
    },
    {
      id: 9,
      title: 'Turnkey Interior Solutions',
      description: 'End-to-end interior design and execution for a hassle-free experience.',
      icon: '🔑'
    }
  ];
}
