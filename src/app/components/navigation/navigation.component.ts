import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="container">
        <div class="nav-brand">
        <img src="/assets/mci-logo.JPG" alt="My Choice Interior" class="nav-logo" />
          <h2>My Choice Interior</h2>
        </div>
        <ul class="nav-menu">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#services" class="nav-link">Services</a></li>
          <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
          <li><a href="#testimonials" class="nav-link">Testimonials</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {}
