import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class FormsComponent {
  forms = [
    {
      name: 'Employee Onboarding Form',
      description: 'New hire paperwork',
      downloadLink: '#',
    },
    {
      name: 'Expense Reimbursement Form',
      description: 'Submit expense reports',
      downloadLink: '#',
    },
    {
      name: 'Time Off Request',
      description: 'Request vacation or sick days',
      downloadLink: '#',
    },
    {
      name: 'Performance Review',
      description: 'Annual performance evaluation',
      downloadLink: '#',
    },
    {
      name: 'IT Equipment Request',
      description: 'Request new hardware/software',
      downloadLink: '#',
    },
  ];

  downloadForm(link: string) {
    console.log('Downloading form from:', link);
    // Implement download logic here
  }
}
