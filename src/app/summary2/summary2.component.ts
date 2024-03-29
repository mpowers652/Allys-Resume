import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { JobComponent } from '../job/job.component';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-summary2',
  standalone: true,
  templateUrl: './summary2.component.html',
  styleUrls: ['./summary2.component.css'],
  imports: [JobComponent, CommonModule]
})
export class Summary2Component implements /*OnInit,*/ AfterViewInit{
 
  @Input() summary:string = '';
  @Input() skills:string = '';
  @Input() dutieList:string[] = [];

  @ViewChildren(JobComponent) jobList?: QueryList<JobComponent>;
  
  majorDuties:Set<string> = new Set();
  
  ngAfterViewInit(): void {
    this.jobList?.forEach(job=>{
      const jobDuties = job.duties
      for (let index = 0; index < jobDuties.length; index++) {
        const duty = jobDuties[index];
        this.majorDuties.add(duty)
      }
    });
  } 
}
