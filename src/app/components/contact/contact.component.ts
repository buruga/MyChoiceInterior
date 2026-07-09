import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact section">
      <div class="container">
        <div class="section-header text-center">
          <h2>Get In Touch</h2>
          <p class="section-subtitle">Let's discuss your next project</p>
        </div>

        <div class="contact-wrapper">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <div class="info-item">
              <strong>📍 Corporate Office:</strong>
              <p>5-9-287/5/3, Prasanthi Nagar, Kukatpally, Hyderabad-500018, Telangana</p>
            </div>
            <div class="info-item">
              <strong>📧 Email:</strong>
              <p><a href="mailto:buruga.prasad&#64;gmail.com">info&#64;mychoiceinterior.com</a></p>
            </div>
            <div class="info-item">
              <strong>📱 Phone:</strong>
              <p><a href="tel:+919963994485">+91 9963994485</a></p>
            </div>
            <div class="info-item">
              <strong>🕐 Hours:</strong>
              <p>Monday - SaturDay: 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>

          <form class="contact-form" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                [(ngModel)]="formData.name"
                name="name"
                required
              >
            </div>

            <div class="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                [(ngModel)]="formData.email"
                name="email"
                required
              >
            </div>

            <div class="form-group">
              <input 
                type="text" 
                placeholder="Phone Number" 
                [(ngModel)]="formData.phone"
                name="phone"
                required
              >
            </div>

            <div class="form-group">
              <input 
                type="text" 
                placeholder="Subject" 
                [(ngModel)]="formData.subject"
                name="subject"
                required
              >
            </div>

            <div class="form-group">
              <textarea 
                placeholder="Your Message" 
                rows="5"
                [(ngModel)]="formData.message"
                name="message"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Send Message</button>
            <p *ngIf="submitted" class="form-success">{{ successMessage }}</p>
          </form>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private readonly googleSheetUrl = 'https://script.google.com/macros/s/AKfycbzU9uVUAsX54zRiRZrcC7K0X3UWZrE1MsFcF0bxzkdvkzSgRVI-hiTAqTxohHZ1MOivzA/exec';

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;
  successMessage = '';

  async onSubmit() {
    debugger;
    if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.subject || !this.formData.message) {
      this.successMessage = 'Please fill in all required fields.';
      this.submitted = true;

      setTimeout(() => {
        this.submitted = false;
        this.successMessage = '';
      }, 3000);

      return;
    }

    const payload = {
      name: this.formData.name.trim(),
      email: this.formData.email.trim(),
      phone: this.formData.phone.trim(),
      subject: this.formData.subject.trim(),
      message: this.formData.message.trim(),
      submittedAt: new Date().toISOString()
    };

    try {
      await this.submitToGoogleAppsScript(payload);
      this.handleSuccess();
    } catch (error) {
      console.error('Google Apps Script submission failed:', error);
      this.handleFailure();
    }
  }

  private async submitToGoogleAppsScript(payload: Record<string, string>) {
    const response = await fetch(this.googleSheetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams(payload),
      mode: 'cors'
    });

    const text = await response.text();
    debugger;
    if (!response.ok) {
      throw new Error(text || 'Google Apps Script request failed');
    }
  }

  private handleSuccess() {
    this.successMessage = 'Thank you! Your message has been submitted.';
    this.submitted = true;

    setTimeout(() => {
      this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
      this.submitted = false;
      this.successMessage = '';
    }, 4000);
  }

  private handleFailure() {
    this.successMessage = 'Your message could not be saved right now. Please try again in a moment.';
    this.submitted = true;

    setTimeout(() => {
      this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
      this.submitted = false;
      this.successMessage = '';
    }, 4000);
  }
}
