import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private defaultEmail = 'skabida621@gmail.com';
  private defaultPassword = '1234567890';
  loginError: boolean = false;

  constructor(private router: Router) { }

  onSubmit(form: any) {
    const { email, password } = form.value;

    if (email === this.defaultEmail && password === this.defaultPassword) {
      this.loginError = false;
      // localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      this.loginError = true; // Show error message
    }
  }
}
