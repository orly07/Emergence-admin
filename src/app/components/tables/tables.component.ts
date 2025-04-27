import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatTabsModule],
})
export class TablesComponent {
  table1Data = [
    {
      id: 1,
      name: 'Orlando Dela Cruz',
      country: 'Philippines',
      city: 'Quezon',
      salary: '$75,000',
    },
    {
      id: 2,
      name: 'Dhennis Nizal',
      country: 'Philippines',
      city: 'Quezon',
      salary: '$95,000',
    },
    {
      id: 3,
      name: 'Selwyn Gaspi',
      country: 'Philippines',
      city: 'Quezon',
      salary: '$65,000',
    },
    {
      id: 4,
      name: 'Jorence Mendoza',
      country: 'Philippines',
      city: 'Quezon',
      salary: '$80,000',
    },
    {
      id: 5,
      name: 'Satria Catibog',
      country: 'Philippines',
      city: 'Quezon',
      salary: '$70,000',
    },
  ];

  table1Columns = ['id', 'name', 'country', 'city', 'salary'];

  table2Data = [
    { id: 1, name: 'Project Alpha', department: 'IT', cost: '$50,000' },
    {
      id: 2,
      name: 'Marketing Campaign',
      department: 'Marketing',
      cost: '$30,000',
    },
    { id: 3, name: 'HR Training', department: 'HR', cost: '$15,000' },
    {
      id: 4,
      name: 'Office Renovation',
      department: 'Operations',
      cost: '$120,000',
    },
    { id: 5, name: 'Product Launch', department: 'Sales', cost: '$75,000' },
  ];

  table2Columns = ['id', 'name', 'department', 'cost'];
}
