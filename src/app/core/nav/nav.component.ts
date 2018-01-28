import { Component, OnInit } from '@angular/core';
import {CollapseDirective} from "ngx-bootstrap"

@Component({
  selector: 'top-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  // styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  menuItems :Array<string>= ['ddddd','fwefwef'];
  public navbarCollapsed = true;
  public isCollapsed: boolean;
  constructor() { 
    this.isCollapsed = false;
  }
  public collapsed(event: any): void {
    console.log(event);
}

public expanded(event: any): void {
    console.log(event);
}
  ngOnInit() {}

}