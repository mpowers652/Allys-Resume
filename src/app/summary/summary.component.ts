import { Component, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from '../job/job.component';
import { JobColl } from '../job-coll';
import { Job } from '../job';

@Component({
    selector: 'app-summary',
    standalone: true,
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css'],
    imports: [JobComponent, CommonModule]
})
export class SummaryComponent implements AfterViewInit{
 
  @Input() summary:string = '';
  @Input() skills:string = '';

  @ViewChildren(JobComponent) jobList?: QueryList<JobComponent>;
  
  majorDuties:Set<string> = new Set();
  jobs:Job[] = new JobColl().jobList
  
  ngAfterViewInit(): void {
    this.jobList?.forEach(job=>{
      const jobDuties = job.duties
      for (const duty of jobDuties) {
        this.majorDuties.add(duty)
      }
    });
  } 
  
}
