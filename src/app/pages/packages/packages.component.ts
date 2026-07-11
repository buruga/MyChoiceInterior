import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../shared/components/cta-band.component';
import { SeoService } from '../../core/seo/seo.service';
import { PACKAGES } from '../../data/packages.data';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [RouterLink, RevealDirective, CtaBandComponent],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss',
})
export class PackagesComponent implements OnInit {
  readonly packages = PACKAGES;

  // Union of all material categories across tiers, for the comparison table rows.
  readonly categories = Array.from(
    new Set(PACKAGES.flatMap((p) => p.materials.map((m) => m.category)))
  );

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Interior Packages — Standard, Deluxe & Luxury',
      description:
        'Three transparent interior packages. Compare Standard, Deluxe and Luxury with the exact material grades and brands (CenturyPly, Hafele, Hettich, Blum and more) included in each.',
      path: '/packages',
      image: '/images/packages/deluxe.jpg',
    });
  }

  brandFor(packageIndex: number, category: string): string {
    const line = this.packages[packageIndex].materials.find((m) => m.category === category);
    return line ? `${line.brand}` : '—';
  }
}
