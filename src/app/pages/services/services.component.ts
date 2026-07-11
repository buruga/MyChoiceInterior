import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../shared/components/cta-band.component';
import { SeoService } from '../../core/seo/seo.service';
import { CORE_SERVICES, ALLIED_SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, RevealDirective, CtaBandComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  readonly core = CORE_SERVICES;
  readonly allied = ALLIED_SERVICES;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Interior Design Services',
      description:
        'Modular kitchens, wardrobes, living rooms, full-home turnkey interiors and more — plus allied services like electrical, painting, safety doors, grills, cloth-drying and house shifting.',
      path: '/services',
      image: '/images/gallery/work-033.jpg',
    });
  }
}
