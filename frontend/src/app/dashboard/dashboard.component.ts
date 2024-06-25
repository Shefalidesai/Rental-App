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
    this.router.navigate(['sales-form-app'])
  }
  onRent(){
    this.router.navigate(['rent-property-list']);
  }
  OnLogin(){
    this.router.navigate(['login'])
  }
  newProperties(){
    this.router.navigate(['new-property'])
  }
  onForSale(){
    this.router.navigate(['sale-property-list']);
  }
}
