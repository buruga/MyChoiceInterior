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

        <button
          class="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          [attr.aria-expanded]="isMenuOpen"
          (click)="toggleMenu()"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-menu" [class.is-open]="isMenuOpen">
          <li><a href="#home" class="nav-link" (click)="closeMenu()">Home</a></li>
          <li><a href="#services" class="nav-link" (click)="closeMenu()">Services</a></li>
          <li><a href="#portfolio" class="nav-link" (click)="closeMenu()">Portfolio</a></li>
          <li><a href="#testimonials" class="nav-link" (click)="closeMenu()">Testimonials</a></li>
          <li><a href="#contact" class="nav-link" (click)="closeMenu()">Contact</a></li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
