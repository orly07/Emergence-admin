import { Component, AfterViewInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Chart } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    NgChartsModule,
  ],
})
export class DashboardComponent implements AfterViewInit {
  chartsInitialized = false;
  ngAfterViewInit() {
    setTimeout(() => {
      this.chartsInitialized = true;
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }
  // Chart Type Definitions
  public lineChartType: ChartType = 'line';
  public barChartType: ChartType = 'bar';
  public lineChartType2: ChartType = 'line';

  // Cards Data
  cards = [
    { title: 'Storage', value: '24GB', icon: 'storage', color: 'primary' },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: 'attach_money',
      color: 'accent',
    },
    { title: 'Food Issues', value: '23', icon: 'fastfood', color: 'warn' },
    { title: 'Followers', value: '+45', icon: 'people', color: 'primary' },
  ];

  // Daily Sales Chart
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Daily Sales',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: { legend: { display: true } },
  };

  // Subscriptions Chart
  public barChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        label: 'Subscriptions',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
      },
    ],
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: { type: 'category' },
      y: { beginAtZero: true },
    },
  };

  // Completed Tasks Chart
  public lineChartData2: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Completed Tasks',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  // Table Data
  employees = [
    { id: 1, name: 'Orlando Dela Cruz', position: 'Developer', salary: '$75,000' },
    { id: 2, name: 'Selwyn Gaspi', position: 'Database Designer', salary: '$65,000' },
    { id: 3, name: 'Dhennis Nizal', position: 'Manager', salary: '$95,000' },
    { id: 4, name: 'Jorence Mendoza', position: 'Developer', salary: '$80,000' },
    { id: 5, name: 'Satria Catibog', position: 'QA', salary: '$70,000' },
  ];

  displayedColumns: string[] = ['id', 'name', 'position', 'salary'];
}
