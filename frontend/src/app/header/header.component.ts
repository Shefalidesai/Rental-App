import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { GetLoginService } from '../get-login.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  afterLogin:boolean=false;
  currentUrl!: string;
  login!:string|null;
	constructor(private router:Router, private getLoginService:GetLoginService){}
  
  ngOnInit(): void {
    this.getLoginService.getLogin().subscribe((login) => {
      this.login = login;
      // Check the login status immediately
      this.updateTemplateBasedOnUrl(this.router.url);
    });

    this.currentUrl = this.router.url;
    console.log('Initial URL:', this.currentUrl); // Debugging line

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.urlAfterRedirects;
          console.log('URL after navigation:', this.currentUrl); // Debugging line
          this.updateTemplateBasedOnUrl(this.currentUrl);
        }
      });

    // Listen for browser back button and navigate to the dashboard if necessary
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          if (this.afterLogin && this.isInaccessibleAfterLogin(event.url)) {
            console.log('Redirecting to dashboard because afterLogin is true'); // Debugging line
            this.router.navigate(['/dashboard']);
          }
        }
      });
    
    console.log(this.login);

    
  }
  
  updateTemplateBasedOnUrl(url: string) {
    console.log('Checking URL:', url); // Debugging line
    if (url === '/login' || url === '/login/' || this.login!=null) {
      console.log('Setting afterLogin to true'); // Debugging line
      this.afterLogin = true;
    } else {
      console.log('Setting afterLogin to false'); // Debugging line
      this.afterLogin = false;
    }
  }
  private isInaccessibleAfterLogin(url: string): boolean {
    // Add your logic here to determine if the current URL should redirect after login
    return url === '/login' || url === '/register'; // Example conditions
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
    this.afterLogin=false;
    this.router.navigate(['dashboard']);
  }
  savedAds(){
    this.router.navigate(['saved-ads']);
  }
}
