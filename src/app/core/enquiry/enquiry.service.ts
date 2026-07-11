import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { EnquiryPayload } from '../../models/content.models';

export interface EnquiryResult {
  ok: boolean;
  demo?: boolean;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class EnquiryService {
  private readonly endpoint = environment.enquiryEndpoint;

  /**
   * Submits the enquiry to the Google Apps Script Web App as a simple
   * (form-encoded) request to avoid a CORS preflight. Because the response
   * is not reliably readable cross-origin, a resolved request is treated as
   * success. If no endpoint is configured, runs in safe demo mode.
   */
  async submit(
    payload: EnquiryPayload,
    formLoadedAt: number,
    honeypot = ''
  ): Promise<EnquiryResult> {
    if (!this.endpoint) {
      // Demo mode — simulate a short delay and succeed without a network call.
      await new Promise((r) => setTimeout(r, 700));
      return { ok: true, demo: true };
    }

    const body = new URLSearchParams();
    body.set('name', payload.name);
    body.set('phone', payload.phone);
    body.set('email', payload.email ?? '');
    body.set('message', payload.message ?? '');
    body.set('serviceInterest', payload.serviceInterest ?? '');
    body.set('packageInterest', payload.packageInterest ?? '');
    body.set('_hp', honeypot);
    body.set('_t', String(Date.now() - formLoadedAt));

    try {
      await fetch(this.endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      return { ok: true };
    } catch (err) {
      return { ok: false, error: String(err) };
    }
  }
}
