import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  standalone: true,
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  imports: [CommonModule]
})
export class JobComponent {
  @Input() title:string = '';
  @Input() duties:string[] = [];
  @Input() summary:string = '';
  @Input() company:string = '';
  @Input() locUrl:string = '';
  @Input() contact:string = '';
  @Input() jobId:number = 0;

  dateOptions: any = {year: 'numeric', month: '2-digit'}
  receivedStartDate: Date = new Date();
  receivedEndDate: Date = new Date();

  @Input() set startDate(value: string) {
    // Parse the string value to a Date object
    this.receivedStartDate = new Date(value);
  }
  
  @Input() set endDate(value: string) {
    // Parse the string value to a Date object
    this.receivedEndDate = new Date(value);
  }

}
