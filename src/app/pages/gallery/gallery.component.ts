import { Component, OnInit, computed, signal } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CtaBandComponent } from '../../shared/components/cta-band.component';
import { SeoService } from '../../core/seo/seo.service';
import { GALLERY, GALLERY_ROOM_TYPES } from '../../data/gallery.data';
import { GalleryItem } from '../../models/content.models';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RevealDirective, CtaBandComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  readonly roomTypes = GALLERY_ROOM_TYPES;
  readonly room = signal('All');

  readonly filtered = computed(() =>
    GALLERY.filter((item) => this.room() === 'All' || item.roomType === this.room())
  );

  readonly active = signal<GalleryItem | null>(null);
  readonly activeIndex = signal(0);

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Gallery — Interior Design Work',
      description:
        'Browse real interior design work by My Choice Interior — living rooms, bedrooms, wardrobes, kitchens, TV units, puja rooms and more from completed projects.',
      path: '/gallery',
      image: '/images/gallery/work-001.jpg',
    });
  }

  setRoom(v: string): void {
    this.room.set(v);
  }

  open(item: GalleryItem): void {
    const idx = this.filtered().findIndex((i) => i.id === item.id);
    this.activeIndex.set(idx >= 0 ? idx : 0);
    this.active.set(item);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.active.set(null);
    document.body.style.overflow = '';
  }

  next(): void {
    const items = this.filtered();
    if (!items.length) return;
    const idx = (this.activeIndex() + 1) % items.length;
    this.activeIndex.set(idx);
    this.active.set(items[idx]);
  }

  prev(): void {
    const items = this.filtered();
    if (!items.length) return;
    const idx = (this.activeIndex() - 1 + items.length) % items.length;
    this.activeIndex.set(idx);
    this.active.set(items[idx]);
  }
}
