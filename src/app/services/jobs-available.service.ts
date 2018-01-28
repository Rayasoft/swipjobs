import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//HTTP
import {Http,Response, RequestOptions, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router'


//models
import {JobsAvailableEntity,IJobsAvailableEntity} from '../models/jobs-available.model.component'

@Injectable()
export class JobsAvailableService {
  private baseUrl: string = './api/';
  private apiVersion = '1.0';
  private mockFileName = 'assets/mock-jobs-available.json';
  //TODO: Add Avalable jobs endpoint url :
  readonly getJobsAvailableEndpoint:string='Get Avalable Jobs Endpoint';
  private isMockupDataUsing:boolean=false;
  avaliableJobs:IJobsAvailableEntity;
  
  constructor(private http:Http ) { }
   setMockUpFlag(value:boolean){
    this.isMockupDataUsing=value;    
  }

private getHeaders() {
  let headers = new Headers();
  headers.append('Accept', 'application/json');
  return headers;
}
public handleError(error: any) {
  // could be something more sofisticated
  let errorMsg = error.message || `Unable to get data! please check your internet connection or try again later.`;
  console.error(errorMsg);
  // instead of Observable we return a rejected Promise
  //return Promise.reject(errorMsg);
  return Observable.throw(errorMsg);
}

  getMockupFlag(){
    return this.isMockupDataUsing;
  }
  getJobsAvailable(customerId :number):Observable<IJobsAvailableEntity> {
    var endpoint ='';
    endpoint = this.isMockupDataUsing?this.mockFileName:this.baseUrl +this.getJobsAvailableEndpoint;      
        return this.http
                    .get(endpoint,{ headers: this.getHeaders() })
                    .map(r => r.json())
                    .catch(this.handleError);      
  }
  
  logError(err) {
    console.error('There was an error: ' + err);
  }
  logErrors(error:any) {
    if(this.isMockupDataUsing)
      {      
        console.log("Error:",error);
      }
      else{
        let result$ = this.http
                    .post(this.baseUrl + '/LogClientError',error, { headers: this.getHeaders() })
                    .map(r => r.json())
                    .catch(new function(){
                      console.log('Failed to log eror to server:',error);
                    });
         return result$;
      }
  }  
}

