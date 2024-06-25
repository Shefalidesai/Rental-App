import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'frontend';
  // showSale:boolean =false;
  // showDashboard:boolean=true;

  // constructor(private router: Router){

  //  router.events.subscribe((val)=>{
  //   if(val instanceof NavigationEnd){
  //     if( val.url=='/sales-form-app'){
  //       this.showSale=true;
  //       this.showDashboard=false;
  //     }else{
  //       this.showSale=false;
  //       this.showDashboard=true;
  //     }
  //   }
  //  })
  // }
}
