import { Component, OnInit } from '@angular/core';

//Models
import {IJobsAvailableEntity,JobsAvailableEntity} from '../models/jobs-available.model.component'

//Services
import{JobsAvailableService} from '../services/jobs-available.service'

@Component({
  selector: 'app-jobs-available',
  templateUrl: './jobs-available.component.html',
  styleUrls: ['./jobs-available.component.css']
})
export class JobsAvailableComponent implements OnInit {
  private title:string;
  jobsAvailable:IJobsAvailableEntity;
  public startDayOfWork:Date;
  public endDayOfWork:Date;
  constructor(private jobAvailableService:JobsAvailableService) {
    
      this.jobAvailableService.setMockUpFlag(true);
      this.title=  'Jobs Available';
      this.jobsAvailable= new JobsAvailableEntity();
   }

  ngOnInit() {
    this.loadJobsAvailable();
  }
  loadJobsAvailable(){
    this.jobAvailableService.getJobsAvailable(0).subscribe(
      data=>{    
        this.jobsAvailable = data;
        if(this.jobsAvailable && this.jobsAvailable.shifts)
          {
            //var shifts = 
            if(this.jobsAvailable.shifts.length > 0)
              {
                this.startDayOfWork =this.jobsAvailable.shifts[0].startDate?new Date(this.jobsAvailable.shifts[0].startDate.toString()):null;
                this.endDayOfWork = this.jobsAvailable.shifts[this.jobsAvailable.shifts.length-1].startDate?new Date(this.jobsAvailable.shifts[this.jobsAvailable.shifts.length-1].startDate.toString()):null;
              }
          }
      },
      error=>{
        console.log(error);
      });
  }
  getTimezone(date:Date):string {
    var zoneName='';
    var d = new Date();
    var s = d.toString();
    var zoneinfo = s.match(".*(\\((.*)\\))");
    if(zoneinfo!== undefined && zoneinfo!==null)
      {
        zoneName = s.match(".*(\\((.*)\\))")[2];
        zoneName = zoneName.replace(/Daylight Time/g, '');
      }    
    return zoneName;
  }
  mapAddress(location:string):string{
    var address = '';
    if(location !==undefined && location !== null)
      {
        address = 'http://www.google.com/maps/place/' ;
        address += location.replace(/,/g, '+');
      }
    return address;
  }  
  backToHomepage()
  {
    console.log('ignore the job');
  }
    takeTheJob(){
    console.log('take the job');

  }
}
