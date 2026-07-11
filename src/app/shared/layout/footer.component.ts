import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../data/site.data';
import { OFFICES } from '../../data/offices.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly site = SITE;
  readonly offices = OFFICES;
  readonly year = new Date().getFullYear();

  readonly quickLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Packages', path: '/packages' },
    { label: 'Materials & Brands', path: '/materials' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Our Process', path: '/process' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
}
