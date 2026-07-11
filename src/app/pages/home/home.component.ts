import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../shared/components/cta-band.component';
import { SeoService } from '../../core/seo/seo.service';
import { SITE } from '../../data/site.data';
import { CORE_SERVICES } from '../../data/services.data';
import { PACKAGES } from '../../data/packages.data';
import { MATERIALS } from '../../data/materials.data';
import { GALLERY } from '../../data/gallery.data';
import { TESTIMONIALS } from '../../data/testimonials.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective, CtaBandComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  readonly site = SITE;
  readonly services = CORE_SERVICES.slice(0, 6);
  readonly packages = PACKAGES;
  readonly materials = MATERIALS.slice(0, 4);
  readonly gallery = GALLERY.slice(0, 6);
  readonly testimonials = TESTIMONIALS.slice(0, 3);

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Premium Home Interior Designers',
      description:
        'My Choice Interior crafts elegant, end-to-end home interiors — modular kitchens, wardrobes, full-home turnkey design — with premium materials, trusted brands and on-time delivery.',
      path: '/',
    });
  }

  stars(n: number): number[] {
    return Array.from({ length: n });
  }
}
