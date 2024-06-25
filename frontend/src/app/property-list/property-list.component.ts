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
  bhk: number = 1;
  furnishing: string = '';
  parking: string = 'yes';
  city: string = 'Mumbai';
  homes:HomeSales[] = [];
  filteredHomes: any[] = [];
  filtered:any[]=[];

  constructor(private service:RentalAppService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getHomeSale();
    this.applyFilters();
   
   }
   selectButton(button: string) {
    this.selectedButton = button;
  }

getHomeSale():void{
    this.service.getHomeSales('/category/Rent').subscribe((data:HomeSales[])=>{
      this.homes=data;
      console.log(data);
      this.applyFilters();
    })
}
  
applyFilters(): void {
  this.filteredHomes = this.homes.filter(home =>
    (this.bhk === 0 || home.bhk === this.bhk) &&
    (this.furnishing === '' || home.furnished === this.furnishing) &&
    (this.parking === '' || home.parking === this.parking) &&
    (this.city === '' || home.city === this.city)
  );
  console.log(this.bhk);
  
  console.log('Filtered Homes:', this.filteredHomes);
}

onFilterChange(): void {
  this.applyFilters();
}
 

}