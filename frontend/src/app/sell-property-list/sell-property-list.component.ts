import { Component, OnInit } from '@angular/core';
import { RentalAppService } from '../rental-app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sell-property-list',
  templateUrl: './sell-property-list.component.html',
  styleUrls: ['./sell-property-list.component.css']
})
export class SellPropertyListComponent  implements OnInit {


  selectedButton: string = 'Buy';
  bhk!:number;
  furnishing!: string;
  parking!: string;
  city!: string;
  filteredHomes: HomeSales[] = [];
  homes:HomeSales[] = [];

  constructor(private service:RentalAppService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getHomeSale();
   
   }

  getHomeSale():void{
    this.service.getHomeSales('/category/Sale').subscribe((data:HomeSales[])=>{
      this.homes=data;
      console.log(data);
      
    })
  }


  selectButton(button: string): void {
    this.selectedButton = button;
    
  }

  

}
