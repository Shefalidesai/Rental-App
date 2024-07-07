import { Component, Input, OnInit } from '@angular/core';
import './property'
import { RentalAppService } from '../rental-app.service';
import { HttpClient } from '@angular/common/http';
import './saveLikedAds'
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent  implements OnInit {

  selectedButton: string = 'Buy';
  selectedBhk: number = 1;
  furnishing: string = '';
  parking: string = '';
  city: string = '';
  homes:HomeSales[] = [];
  login!:string;
  getUserName!:any;
  isLiked: boolean = false;



  constructor(private service:RentalAppService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getHomeSale();
   }

   toggleLike(): void {
    this.isLiked = !this.isLiked;
    this.saveLikeAds();  // Call the method to handle the "like" action
  }
  getHomeSale():void{
    this.service.getHomeSales('/category/Rent').subscribe((data:HomeSales[])=>{
      this.homes=data;
      console.log(data);
     
    })} 

    selectButton( input: string): void {
      this.selectedButton = input
     if(input=='Rent'){
      this.getHomeSale();
     }else if(input=='PG'){
      this.service.getHomeSales('/category/PG').subscribe((data:HomeSales[])=>{
        this.homes=data;
        console.log(this.selectedBhk+'bhk'+data);
      })
     }else{
      this.service.getHomeSales('/category/PG').subscribe((data:HomeSales[])=>{
        this.homes=data;
        console.log(this.selectedBhk+'bhk'+data);
      })
     }
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

    async saveLikeAds() {
      try {
        const homeSales: HomeSales[] = await firstValueFrom(this.service.getHomeSales());
        this.homes = homeSales;
    
        const postData = homeSales.map(data => ({
          sellerName: data.sellerName,
          towerName: data.towerName,
          price: data.price,
          address: data.address,
          landMark: data.landMark,
          carpetArea: data.carpetArea,
          bhk: data.bhk,
          furnished: data.furnished,
          ownerType: data.ownerType,
          city: data.city,
          floorNo: data.floorNo,
          totalFloors: data.totalFloors,
          parking: data.parking,
          phoneNo: data.phoneNo,
          category: data.category,
          construction: data.construction
        }));
  
       
        
        // Assuming saveLikedAds takes postData and login as parameters
        const savedAdData: saveLikedAds[] = await firstValueFrom(this.service.saveLikedAds(postData, this.login));
    
        console.log(savedAdData);
      } catch (error) {
        console.error('Error fetching and saving ads', error);
      }
    }
    
}
  



