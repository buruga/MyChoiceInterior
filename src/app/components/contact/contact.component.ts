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
              <p><a href="mailto:info&#64;mychoiceinterior.com">info&#64;mychoiceinterior.com</a></p>
            </div>
            <div class="info-item">
              <strong>📱 Phone:</strong>
              <p><a href="tel:+919963994485">+91 9963994485</a></p>
            </div>
            <div class="info-item">
              <strong>🕐 Hours:</strong>
              <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
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
            <p *ngIf="submitted" class="form-success">Thank you! We'll get back to you soon.</p>
          </form>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.subject && this.formData.message) {
      console.log('Form submitted:', this.formData);
      this.submitted = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.formData = { name: '', email: '', subject: '', message: '' };
        this.submitted = false;
      }, 3000);
    }
  }
}
