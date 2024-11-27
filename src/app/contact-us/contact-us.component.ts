import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true, // Indicates it's a standalone component
  imports: [CommonModule, ReactiveFormsModule], // Add ReactiveFormsModule here
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  inquiryType: string = '';
  checklistVisible = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      inquiryType: ['', Validators.required],
      specificNeeds: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required],
    });
  }

  showChecklist(type: string): void {
    this.inquiryType = type;
    this.checklistVisible = true;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle submission logic here
    }
  }
}
