import { Component, OnInit, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SeoService } from '../../core/seo/seo.service';
import { EnquiryService } from '../../core/enquiry/enquiry.service';
import { SITE } from '../../data/site.data';
import { OFFICES } from '../../data/offices.data';
import { PACKAGES } from '../../data/packages.data';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private enquiry = inject(EnquiryService);
  private seo = inject(SeoService);
  private route = inject(ActivatedRoute);

  readonly site = SITE;
  readonly offices = OFFICES;
  readonly serviceGroups = [
    {
      label: 'Full Interior',
      options: [
        'Residential Apartment Interior',
        'Residential House Interior',
        'Commercial Space Interior',
      ],
    },
    {
      label: 'Partial Interior',
      options: [
        'Modular Kitchen',
        'Wardrobes & Storage',
        'Crockery Units',
        'TV Units',
        'Pooja Room Design',
        'Living Room',
        'Bedroom',
        'Bathroom',
        'Home Office',
        'Office Furniture',
        'False Ceiling & Lighting',
      ],
    },
  ];
  readonly packages = PACKAGES.map((p) => p.name);

  readonly state = signal<FormState>('idle');
  private formLoadedAt = Date.now();

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[+]?[\d\s-]{7,15}$/)]],
    email: ['', [Validators.email]],
    serviceInterest: [''],
    packageInterest: [''],
    message: ['', [Validators.maxLength(1000)]],
    company: [''], // honeypot — must stay empty
  });

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact & Free Consultation',
      description:
        'Get a free interior design consultation from My Choice Interior. Share your requirements and our team will get back to you with ideas and a transparent quote.',
      path: '/contact',
    });

    const pkg = this.route.snapshot.queryParamMap.get('package');
    if (pkg && this.packages.includes(pkg)) {
      this.form.patchValue({ packageInterest: pkg });
    }
    this.formLoadedAt = Date.now();
  }

  invalid(control: string): boolean {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  async submit(): Promise<void> {
    if (this.state() === 'submitting') return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Honeypot: silently succeed without sending if a bot filled it.
    const honeypot = this.form.getRawValue().company;
    if (honeypot) {
      this.state.set('success');
      return;
    }

    this.state.set('submitting');
    const v = this.form.getRawValue();
    const result = await this.enquiry.submit(
      {
        name: v.name,
        phone: v.phone,
        email: v.email,
        message: v.message,
        serviceInterest: v.serviceInterest,
        packageInterest: v.packageInterest,
      },
      this.formLoadedAt,
      honeypot
    );

    if (result.ok) {
      this.state.set('success');
      this.form.reset();
    } else {
      this.state.set('error');
    }
  }

  resetForm(): void {
    this.state.set('idle');
    this.form.reset();
    this.formLoadedAt = Date.now();
  }
}
