import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RentalAppService } from '../rental-app.service';

@Component({
  selector: 'app-new-construction',
  templateUrl: './new-construction.component.html',
  styleUrls: ['./new-construction.component.css']
})
export class NewConstructionComponent  implements OnInit {

  homes:HomeSales[] = [];

  constructor(private service:RentalAppService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getHomeSale();
    // this.fetchHomes();
   }

  getHomeSale():void{
    this.service.getHomeSales('/construction/New').subscribe((data:HomeSales[])=>{
      this.homes=data;
      console.log(data);
      
    })
  }

  // selectedButton: string = 'Buy';
  // bhk: string = '1';
  // furnishing: string = 'semi';
  // parking: string = 'yes';
  // searchQuery: string = '';
  // filteredHomes: any[] = [];


  // selectButton(button: string) {
  //   this.selectedButton = button;
  //   this.filterHomes();
  // }

  // fetchHomes() {
  //   // Fetch homes from the API
  //   this.service.getHomeSales().subscribe((data:HomeSales[])=>{
  //     this.homes=data;
  //     this.filterHomes();
  //     console.log(data);
  //   })
  // }

  // filterHomes() {
  //   this.filteredHomes = this.homes.filter(home =>
  //     home.bhk == this.bhk &&
  //     home.furnished == this.furnishing &&
  //     home.parking == this.parking
  //   );
  // }

  // search() {
  //   const searchParams = {
  //     selectedCategory: this.selectedButton,
  //     bhk: this.bhk,
  //     furnishing: this.furnishing,
  //     parking: this.parking,
  //     query: this.searchQuery
  //   };

  //   console.log('Search Params:', searchParams);
  //   // Perform the search or handle the search parameters as needed
  // }
}
