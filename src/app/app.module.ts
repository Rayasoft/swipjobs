import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

//3rd party
import { AlertModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
//modules
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CoreModule }    from './core/core.module';
//components
import { AppComponent }   from './app.component';
import { JobsAvailableComponent } from './jobs-available/jobs-available.component';
import { PageNotFound404Component } from './page-not-found-404/page-not-found-404.component';

//services
import {JobsAvailableService} from './services/jobs-available.service'
@NgModule({
  imports: [
    BrowserModule,
    CoreModule,    
    BrowserAnimationsModule,    
    HttpModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    JobsAvailableComponent,
    PageNotFound404Component
  ],
  bootstrap: [AppComponent]  ,
  exports: [ AppComponent ],
  providers: [
    JobsAvailableService,       
  ],  
  entryComponents: [ AppComponent ]
})
export class AppModule {} 