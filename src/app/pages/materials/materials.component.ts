import { Component, OnInit } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../shared/components/cta-band.component';
import { SeoService } from '../../core/seo/seo.service';
import { MATERIALS } from '../../data/materials.data';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [RevealDirective, CtaBandComponent],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss',
})
export class MaterialsComponent implements OnInit {
  readonly materials = MATERIALS;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Materials & Brand Partners',
      description:
        'We use only proven material grades — BWR/BWP/marine ply, premium laminates, soft-close hardware — from trusted brands like CenturyPly, Greenply, Hafele, Hettich, Blum, Kajaria and more.',
      path: '/materials',
      image: '/images/materials/plywood.jpg',
    });
  }
}
