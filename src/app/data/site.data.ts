import { SiteInfo } from '../models/content.models';

export const SITE: SiteInfo = {
  brand: 'My Choice Interior',
  tagline: 'Interiors designed around the way you live.',
  phone: '+91 99639 94485',
  phone2: '+91 98662 45327',
  email: 'info@mychoiceinterior.com',
  whatsapp: '919963994485',
  director: 'G. Rajesh',
  socials: [
    { label: 'Instagram', url: 'https://instagram.com' },
    { label: 'Facebook', url: 'https://facebook.com' },
    { label: 'Pinterest', url: 'https://pinterest.com' },
    { label: 'YouTube', url: 'https://youtube.com' },
  ],
  stats: [
    { value: '850+', label: 'Homes Designed' },
    { value: '12', label: 'Years of Craft' },
    { value: '45', label: 'Design Experts' },
    { value: '4.9/5', label: 'Client Rating' },
  ],
  process: [
    {
      step: '01',
      title: 'Consult',
      description:
        'We understand your lifestyle, taste and budget in a free consultation, then map every room to a clear brief.',
    },
    {
      step: '02',
      title: 'Design',
      description:
        '3D designs, material selection and a transparent quote — you approve every detail before we begin.',
    },
    {
      step: '03',
      title: 'Execute',
      description:
        'Factory-finished modular work and precise on-site execution, with regular progress updates at every stage.',
    },
    {
      step: '04',
      title: 'Handover',
      description:
        'A spotless, on-time handover — followed by dedicated post-work maintenance support and assistance.',
    },
  ],
  trust: [
    {
      icon: 'shield',
      title: 'Premium Graded Materials',
      description:
        'Only BWR/BWP & marine-grade ply and reputed brands — the exact grade and brand are shared upfront for every package.',
    },
    {
      icon: 'clock',
      title: 'Timely Delivery',
      description:
        'Milestone-based project plans and factory-finished modules mean we hand over on the promised date.',
    },
    {
      icon: 'bell',
      title: 'Regular Progress Updates',
      description:
        'A dedicated manager keeps you informed with time-to-time updates and photos through the whole build.',
    },
    {
      icon: 'wrench',
      title: 'Post-Work Maintenance Support',
      description:
        'Our relationship continues after handover with warranty-backed maintenance support and assistance.',
    },
    {
      icon: 'link',
      title: 'One-Stop, Home to Move-In',
      description:
        'From interiors to electrical, painting, safety doors, grills and even shifting — trusted references for all.',
    },
    {
      icon: 'star',
      title: 'Transparent Pricing',
      description:
        'Clear package pricing with itemised material grades and brands — no hidden costs, no surprises.',
    },
  ],
};
