import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonServiceService } from '../services-data/common-service.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  headerItems:any = [];

  constructor(private http: HttpClient, private router: Router, private commonService: CommonServiceService) {
     this.http.get('../assets/header-response.json').subscribe(res => {
      this.headerItems = res;
     })
  }

  onSubmit() {
    this.router.navigate(['/login']);
  }

}
