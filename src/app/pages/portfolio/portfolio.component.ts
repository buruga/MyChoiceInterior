import { Component, OnInit, computed, signal } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../shared/components/cta-band.component';
import { SeoService } from '../../core/seo/seo.service';
import { PROJECTS, ROOM_TYPES, STYLES } from '../../data/projects.data';
import { Project } from '../../models/content.models';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RevealDirective, CtaBandComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  readonly roomTypes = ROOM_TYPES;
  readonly styles = STYLES;

  readonly room = signal('All');
  readonly style = signal('All');

  readonly filtered = computed(() =>
    PROJECTS.filter(
      (p) =>
        (this.room() === 'All' || p.roomType === this.room()) &&
        (this.style() === 'All' || p.style === this.style())
    )
  );

  readonly active = signal<Project | null>(null);
  readonly activeImg = signal(0);

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Portfolio — Interior Design Projects',
      description:
        'Browse completed home interior projects by My Choice Interior across kitchens, living rooms, bedrooms and full-home turnkey designs in modern, contemporary, minimal and luxury styles.',
      path: '/portfolio',
      image: '/images/portfolio/p1.jpg',
    });
  }

  setRoom(v: string): void {
    this.room.set(v);
  }

  setStyle(v: string): void {
    this.style.set(v);
  }

  open(p: Project): void {
    this.active.set(p);
    this.activeImg.set(0);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.active.set(null);
    document.body.style.overflow = '';
  }

  nextImg(): void {
    const p = this.active();
    if (!p) return;
    this.activeImg.update((i) => (i + 1) % p.gallery.length);
  }

  prevImg(): void {
    const p = this.active();
    if (!p) return;
    this.activeImg.update((i) => (i - 1 + p.gallery.length) % p.gallery.length);
  }
}
