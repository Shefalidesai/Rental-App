import { Component, Input, OnInit } from '@angular/core';
import './property'
import { RentalAppService } from '../rental-app.service';
import { HttpClient } from '@angular/common/http';
import './saveLikedAds'
import { firstValueFrom } from 'rxjs';
import { GetLoginService } from '../get-login.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent  implements OnInit {

  selectedButton: string = 'Buy';
  selectedBhk!: number ;
  furnishing: string = '';
  parking: string = '';
  city: string = '';
  homes:HomeSales[] = [];
  login:string | null = null;
  getUserName!:any;
  isLiked: boolean = false;
  images: any[] = [];
  sellerName!: string ;

  constructor(private service:RentalAppService, private http: HttpClient,private loginservice:GetLoginService) { }

  ngOnInit(): void {
    this.getHomeSale();
    this.loginservice.getLogin().subscribe(login=>{
        this.login=login
    })
   }

   toggleLike(home: HomeSales) {
    this.homes.forEach(h => h.isLiked = false);
    home.isLiked = !home.isLiked;
    if (home.isLiked) {
      this.saveLikeAds(home);
    }
  }
  

  async getHomeSale(): Promise<void> {
    try {
      const data = await firstValueFrom(this.service.getHomeSales('/all'));
      this.homes = data;
  
      // Fetch images for each home
      for (let home of this.homes) {
        const imagesData = await firstValueFrom(this.service.getImages(home.sellerName));
        home.images = imagesData;
      }
  
      console.log(this.homes);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

    selectButton( input: string): void {
      this.selectedButton = input
     if(input=='Rent'){
      this.service.getHomeSales('/category/Rent').subscribe((data:HomeSales[])=>{
        this.homes=data;
        console.log(this.selectedBhk+'bhk'+data);
      })
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


    async saveLikeAds(ad:saveLikedAds) {
      try {
        const postData = {
          sellerName: ad.sellerName,
          towerName: ad.towerName,
          price: ad.price,
          address: ad.address,
          landMark: ad.landMark,
          carpetArea: ad.carpetArea,
          bhk: ad.bhk,
          town:ad.towerName,
          furnished: ad.furnished,
          ownerType: ad.ownerType,
          city: ad.city,
          floorNo: ad.floorNo,
          totalFloors: ad.totalFloors,
          parking: ad.parking,
          phoneNo: ad.phoneNo,
          category: ad.category,
          construction: ad.construction
        };
  
        // Assuming saveLikedAds takes postData and login as parameters
        const savedAdData = await firstValueFrom(this.service.saveLikedAds(postData, this.login));
        console.log(savedAdData);
      } catch (error) {
        console.error('Error saving ad', error);
      }
    }
}
  



