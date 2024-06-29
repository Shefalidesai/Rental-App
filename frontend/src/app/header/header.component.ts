import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  afterLogin:boolean=false;
  currentUrl!: string;
	constructor(private router:Router){}
  
  ngOnInit(): void {
    this.currentUrl = this.router.url;
    console.log('Initial URL:', this.currentUrl); // Debugging line
    this.updateTemplateBasedOnUrl(this.currentUrl);
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
        console.log('URL after navigation:', this.currentUrl); // Debugging line
        this.updateTemplateBasedOnUrl(this.currentUrl);
      }
    });
  }
  
  updateTemplateBasedOnUrl(url: string) {
    console.log('Checking URL:', url); // Debugging line
    if (url === '/login' || url === '/login/') {
      console.log('Setting afterLogin to true'); // Debugging line
      this.afterLogin = true;
    } else {
      console.log('Setting afterLogin to false'); // Debugging line
      this.afterLogin = false;
    }
  }

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
  onLogOut(){
    this.router.navigate([' ']);
  }
}
