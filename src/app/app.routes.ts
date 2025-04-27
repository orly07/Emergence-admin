import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'tables',
    loadComponent: () =>
      import('./components/tables/tables.component').then(
        (m) => m.TablesComponent
      ),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./components/calendar/calendar.component').then(
        (m) => m.CalendarComponent
      ),
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('./components/forms/forms.component').then(
        (m) => m.FormsComponent
      ),
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];