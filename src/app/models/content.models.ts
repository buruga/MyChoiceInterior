export interface ServiceItem {
  id: string;
  name: string;
  category: 'core' | 'allied';
  image: string;
  description: string;
  highlights: string[];
}

export interface PackageMaterialLine {
  category: string;
  grade: string;
  brand: string;
}

export interface PackageTier {
  id: 'standard' | 'deluxe' | 'luxury';
  name: string;
  tagline: string;
  image: string;
  featured: boolean;
  priceNote: string;
  highlights: string[];
  materials: PackageMaterialLine[];
  ctaLabel: string;
}

export interface MaterialBrand {
  category: string;
  grade: string;
  brands: string[];
  image: string;
  note: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  roomType: string;
  style: string;
  cover: string;
  gallery: string[];
  description: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  roomType: string;
  description: string;
}

export interface Testimonial {
  name: string;
  photo: string;
  rating: number;
  quote: string;
  project: string;
}

export interface Office {
  name: string;
  address: string;
  mapUrl: string;
  email: string;
  phone: string;
  phone2?: string;
  contactPerson?: string;
  isHeadOffice?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TrustHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface SiteInfo {
  brand: string;
  tagline: string;
  phone: string;
  phone2?: string;
  email: string;
  whatsapp: string;
  director?: string;
  socials: { label: string; url: string }[];
  stats: Stat[];
  process: ProcessStep[];
  trust: TrustHighlight[];
}

export interface EnquiryPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
  serviceInterest: string;
  packageInterest: string;
}
