import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  template: `
    <section class="cta-band">
      <div class="container inner" appReveal="scale">
        <p class="eyebrow center">{{ eyebrow }}</p>
        <h2 class="h2">{{ heading }}</h2>
        <p class="lead">{{ sub }}</p>
        <div class="actions">
          <a routerLink="/contact" class="btn btn-gold">{{ primaryLabel }}</a>
          <a routerLink="/packages" class="btn btn-light">View Packages</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .cta-band {
        background:
          linear-gradient(rgba(20, 17, 13, 0.78), rgba(20, 17, 13, 0.88)),
          url('/images/hero/hero-2.jpg') center/cover fixed;
        color: #fff;
        text-align: center;
        padding-block: var(--sp-10);
      }
      .inner { max-width: 720px; margin-inline: auto; }
      h2 { color: #fff; margin: var(--sp-3) 0 var(--sp-4); }
      .lead { color: rgba(255, 255, 255, 0.82); margin-bottom: var(--sp-6); }
      .actions { display: flex; gap: var(--sp-4); justify-content: center; flex-wrap: wrap; }
      @media (max-width: 680px) {
        .cta-band { background-attachment: scroll; }
      }
    `,
  ],
})
export class CtaBandComponent {
  @Input() eyebrow = 'Start Your Project';
  @Input() heading = 'Let’s design a home you’ll love coming back to.';
  @Input() sub =
    'Book a free consultation and get a transparent quote with material grades and brands for every package.';
  @Input() primaryLabel = 'Get a Free Consultation';
}
