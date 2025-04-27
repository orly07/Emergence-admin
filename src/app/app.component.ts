import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AppComponent {
  title = 'Emergence Admin';
  sideNavOpened = true;
  sideNavMode: 'over' | 'side' = 'side';

  navLinks = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
    { path: '/profile', title: 'User Profile', icon: 'person' },
    { path: '/tables', title: 'Table List', icon: 'list' },
    { path: '/calendar', title: 'Calendar', icon: 'calendar_today' },
    { path: '/forms', title: 'Forms', icon: 'description' },
  ];

  constructor() {
    this.updateSidenavMode();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateSidenavMode();
  }

  updateSidenavMode() {
    if (window.innerWidth <= 768) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;
    } else {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
    }
  }
}
