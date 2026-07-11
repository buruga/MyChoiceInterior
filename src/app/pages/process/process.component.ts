import { Component, OnInit } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../shared/components/cta-band.component';
import { SeoService } from '../../core/seo/seo.service';
import { SITE } from '../../data/site.data';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [RevealDirective, CtaBandComponent],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
})
export class ProcessComponent implements OnInit {
  readonly site = SITE;

  readonly supports = [
    {
      title: 'Regular Progress Updates',
      text: 'A dedicated project manager shares time-to-time updates, site photos and milestone reports so you always know exactly where your project stands.',
    },
    {
      title: 'Timely, On-Time Delivery',
      text: 'Factory-finished modular units and milestone-based planning mean we hand over on the promised date — delays are the exception, not the norm.',
    },
    {
      title: 'Post-Work Maintenance Support',
      text: 'Our relationship continues after handover. Warranty-backed maintenance support and quick assistance keep your interiors looking new for years.',
    },
    {
      title: 'One Accountable Team',
      text: 'Design, materials, execution and finishing under one roof — plus trusted references for electrical, painting, safety and even shifting.',
    },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Our Process & Support',
      description:
        'A calm, four-step design journey — Consult, Design, Execute, Handover — with regular progress updates, on-time delivery and dedicated post-work maintenance support.',
      path: '/process',
      image: '/images/services/turnkey.jpg',
    });
  }
}
