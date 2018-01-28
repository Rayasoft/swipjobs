import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swipjobs';

  isCollapsed: boolean = false;
  
   collapsed(event: any): void {
     console.log(event);
   }
  
   expanded(event: any): void {
     console.log(event);
   } 
}
