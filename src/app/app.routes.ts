import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'packages',
    loadComponent: () =>
      import('./pages/packages/packages.component').then((m) => m.PackagesComponent),
  },
  {
    path: 'materials',
    loadComponent: () =>
      import('./pages/materials/materials.component').then((m) => m.MaterialsComponent),
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'process',
    loadComponent: () =>
      import('./pages/process/process.component').then((m) => m.ProcessComponent),
  },
  {
    path: 'offices',
    loadComponent: () =>
      import('./pages/offices/offices.component').then((m) => m.OfficesComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];
