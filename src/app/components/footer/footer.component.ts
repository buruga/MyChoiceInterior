import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>My Choice Interior</h4>
            <p>Transforming spaces with creative, personalized interior design solutions in Hyderabad and beyond.</p>
          </div>

          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Residential Design</a></li>
              <li><a href="#services">Commercial Design</a></li>
              <li><a href="#services">Modular Kitchens</a></li>
              <li><a href="#services">Wardrobes & Storage</a></li>
              <li><a href="#services">False Ceiling & Lighting</a></li>
              <li><a href="#services">Pooja Room Design</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:info&#64;mychoiceinterior.com">info&#64;mychoiceinterior.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+919963994485">+91 9963994485</a></li>
              <li><strong>Address:</strong> 5-9-287/5/3, Prasanthi Nagar, Kukatpally, Hyderabad-500018</li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">Instagram</a>
              <a href="#" class="social-link">Pinterest</a>
              <a href="#" class="social-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 My Choice Interior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
