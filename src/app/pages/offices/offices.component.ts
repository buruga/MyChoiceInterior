import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { OFFICES } from '../../data/offices.data';

@Component({
  selector: 'app-offices',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './offices.component.html',
  styleUrl: './offices.component.scss',
})
export class OfficesComponent implements OnInit {
  readonly offices = OFFICES;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Our Offices',
      description:
        'Visit or call My Choice Interior — offices in Bengaluru, Hyderabad, Chennai and Pune. Find each branch address, phone number and email.',
      path: '/offices',
      image: '/images/offices/office-1.jpg',
    });
  }

  tel(phone: string): string {
    return 'tel:' + phone.replace(/\s/g, '');
  }
}
