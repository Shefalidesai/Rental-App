import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  constructor(private router:Router){}
  
  onSale(){
    this.router.navigate(['sales-app'])
  }
  onRent(){
    this.router.navigate(['property-list']);
  }
  OnLogin(){
    this.router.navigate(['login'])
  }
}
