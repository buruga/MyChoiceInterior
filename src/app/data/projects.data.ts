import { Project } from '../models/content.models';

// Demo projects with real-sounding names and real high-res images.
// Replace names, descriptions and images with actual project data later.
export const PROJECTS: Project[] = [
  {
    id: 'sharma-residence',
    name: 'The Sharma Residence',
    location: 'Whitefield, Bengaluru',
    roomType: 'Full Home',
    style: 'Modern',
    cover: 'images/portfolio/p1.jpg',
    gallery: ['images/portfolio/p1.jpg', 'images/portfolio/p9.jpg', 'images/portfolio/p5.jpg'],
    description: 'A warm, contemporary 3BHK turnkey interior with a statement kitchen and cozy living spaces.',
  },
  {
    id: 'iyer-apartment',
    name: 'Iyer Family Apartment',
    location: 'Adyar, Chennai',
    roomType: 'Living Room',
    style: 'Contemporary',
    cover: 'images/portfolio/p2.jpg',
    gallery: ['images/portfolio/p2.jpg', 'images/portfolio/p6.jpg'],
    description: 'An airy living and dining transformation with a feature wall and layered lighting.',
  },
  {
    id: 'mehta-villa',
    name: 'Mehta Villa',
    location: 'Bodakdev, Ahmedabad',
    roomType: 'Full Home',
    style: 'Luxury',
    cover: 'images/portfolio/p3.jpg',
    gallery: ['images/portfolio/p3.jpg', 'images/portfolio/p10.jpg', 'images/portfolio/p8.jpg'],
    description: 'A bespoke luxury villa interior with veneer finishes, imported hardware and marble surfaces.',
  },
  {
    id: 'nair-kitchen',
    name: 'The Nair Kitchen',
    location: 'Kakkanad, Kochi',
    roomType: 'Kitchen',
    style: 'Minimal',
    cover: 'images/portfolio/p4.jpg',
    gallery: ['images/portfolio/p4.jpg', 'images/portfolio/p7.jpg'],
    description: 'A handleless modular kitchen with quartz countertops and smart corner storage.',
  },
  {
    id: 'kapoor-bedroom',
    name: 'Kapoor Master Suite',
    location: 'DLF Phase 3, Gurugram',
    roomType: 'Bedroom',
    style: 'Contemporary',
    cover: 'images/portfolio/p5.jpg',
    gallery: ['images/portfolio/p5.jpg', 'images/portfolio/p11.jpg'],
    description: 'A serene master bedroom with an upholstered headboard, sliding wardrobe and reading nook.',
  },
  {
    id: 'deshpande-home',
    name: 'Deshpande Home',
    location: 'Baner, Pune',
    roomType: 'Full Home',
    style: 'Modern',
    cover: 'images/portfolio/p6.jpg',
    gallery: ['images/portfolio/p6.jpg', 'images/portfolio/p12.jpg', 'images/portfolio/p2.jpg'],
    description: 'A bright, family-friendly full-home interior balancing storage, durability and style.',
  },
  {
    id: 'reddy-office',
    name: 'Reddy Studio Office',
    location: 'Gachibowli, Hyderabad',
    roomType: 'Office',
    style: 'Minimal',
    cover: 'images/portfolio/p7.jpg',
    gallery: ['images/portfolio/p7.jpg', 'images/portfolio/p4.jpg'],
    description: 'A focused home-office and studio with acoustic comfort and clean, cable-free desks.',
  },
  {
    id: 'fernandes-living',
    name: 'Fernandes Living',
    location: 'Bandra West, Mumbai',
    roomType: 'Living Room',
    style: 'Luxury',
    cover: 'images/portfolio/p8.jpg',
    gallery: ['images/portfolio/p8.jpg', 'images/portfolio/p3.jpg', 'images/portfolio/p10.jpg'],
    description: 'A refined sea-facing living room with bespoke media wall and designer lighting.',
  },
];

export const ROOM_TYPES = ['All', 'Full Home', 'Living Room', 'Kitchen', 'Bedroom', 'Office'];
export const STYLES = ['All', 'Modern', 'Contemporary', 'Minimal', 'Luxury'];
