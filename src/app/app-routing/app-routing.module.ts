import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//components
import { PageNotFound404Component } from '../page-not-found-404/page-not-found-404.component';
import {JobsAvailableComponent  } from '../jobs-available/jobs-available.component'

const appRoutes: Routes = [  
  { path: 'jobsAvailable', component: JobsAvailableComponent },
  { path: '', redirectTo: '/jobsAvailable', pathMatch: 'full' },
  { path: '**', component: PageNotFound404Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
