import { Component, Input, OnInit } from '@angular/core';
import './property'
import { RentalAppService } from '../rental-app.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent  implements OnInit {

  selectedButton: string = 'Buy';
  selectedBhk: number = 1;
  furnishing: string = '';
  parking: string = 'yes';
  city: string = 'Mumbai';
  homes:HomeSales[] = [];


  constructor(private service:RentalAppService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getHomeSale();
   }

  getHomeSale():void{
    this.service.getHomeSales('/category/Rent').subscribe((data:HomeSales[])=>{
      this.homes=data;
      console.log(data);
     
    })} 

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
  



