import { Routes } from '@angular/router';
import {domainGuard} from './guards/guards';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)

  },
  {
    path: 'domains',
    canActivate: [domainGuard],
    loadComponent: () => import('./pages/domains/domains.component').then(m => m.DomainsComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'no-available',
    loadComponent: () => import('./pages/noavaliable/noavaliable.component').then(m => m.NoAvaliableComponent)
  }
]
