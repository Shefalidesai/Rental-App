import { Component, OnInit } from '@angular/core';
import { RentalAppService } from '../rental-app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sell-property-list',
  templateUrl: './sell-property-list.component.html',
  styleUrls: ['./sell-property-list.component.css']
})
export class SellPropertyListComponent  implements OnInit {

  selectedBhk: number = 0;
  furnishing: string = '';
  parking: string = '';
  city: string = '';
  filteredHomes: HomeSales[] = [];
  homes:HomeSales[] = [];

  constructor(private service:RentalAppService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getHomeSale();
   
   }

  getHomeSale():void{
    this.service.getHomeSales('/category/Sell').subscribe((data:HomeSales[])=>{
      this.homes=data;
      console.log(data);
      
    })
  }

  onBhkChange(){
    this.service.getHomeSales('/bhk'+'/'+this.selectedBhk).subscribe((data:HomeSales[])=>{
      this.homes=data;
      console.log(this.selectedBhk+'bhk'+data);
    })
  }

  onFurnishingChange(){
    this.service.getHomeSales('/furnished'+'/'+this.furnishing).subscribe((data:HomeSales[])=>{
      this.homes=data;
      console.log(this.furnishing+'furnished'+data);
    })
  }

  onParkingChange(){
    this.service.getHomeSales('/furnished'+'/'+this.furnishing).subscribe((data:HomeSales[])=>{
      this.homes=data;
      console.log(this.furnishing+'furnished'+data);
    })
  }

  onCityChange(){
    this.service.getHomeSales('/city'+'/'+this.city).subscribe((data:HomeSales[])=>{
      this.homes=data;
      console.log(this.city+'city'+data);
    })
  }
  

}
