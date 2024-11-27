import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ReactiveFormsModule,FormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NT Legal Associates';

  showHeaderFooter = true;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Hide header and footer on the login page
      this.showHeaderFooter = this.router.url !== '/login';
    });
  }

}
