import {
  Component,
  AfterViewInit,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarEvent, CalendarView, CalendarModule } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonToggleModule,
    CalendarModule, // forRoot is in appConfig
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None, // allow calendar’s own CSS to apply
})
export class CalendarComponent implements AfterViewInit {
  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'Team Meeting',
      color: { primary: '#ad2121', secondary: '#FAE3E3' },
    },
    {
      start: startOfDay(new Date()),
      title: 'Product Launch',
      color: { primary: '#1e90ff', secondary: '#D1E8FF' },
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}