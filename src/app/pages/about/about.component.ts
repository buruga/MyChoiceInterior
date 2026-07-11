import { Component, OnInit } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../shared/components/cta-band.component';
import { SeoService } from '../../core/seo/seo.service';
import { SITE } from '../../data/site.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective, CtaBandComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  readonly site = SITE;

  readonly values = [
    { title: 'Transparency', text: 'Clear pricing and honest material grades and brands — always shared before we begin.' },
    { title: 'Craftsmanship', text: 'Precise, factory-finished work and meticulous on-site detailing.' },
    { title: 'Reliability', text: 'On-time delivery and dependable post-work support you can count on.' },
    { title: 'Empathy', text: 'We design around how you actually live, not just how it looks in photos.' },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'About Us',
      description:
        'My Choice Interior is a full-service interior design and execution studio crafting elegant, functional homes with transparency, craftsmanship and reliable support.',
      path: '/about',
      image: '/images/hero/about-hero.jpg',
    });
  }
}
