import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class ProfileComponent {
  private fb = inject(FormBuilder);

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    middleInitial: [''],
    address: ['', Validators.required],
    city: ['', Validators.required],
    province: ['', Validators.required],
    postalCode: ['', Validators.required],
    position: ['', Validators.required],
    department: ['', Validators.required],
  });

  provinces = [
    'Cavite',
    'Laguna',
    'Batangas',
    'Rizal',
    'Quezon',
    'Mindoro',
    'Manila',
    'Baguio',
    'Abra',
    'Tarlac',
  ];

  departments = ['IT', 'HR', 'Finance', 'Marketing', 'Operations', 'Sales'];

  positions = ['Developer', 'Manager', 'Database Designer', 'QA', 'Analyst', 'Director'];

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}