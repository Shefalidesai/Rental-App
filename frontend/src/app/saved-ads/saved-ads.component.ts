import { Component, OnInit } from '@angular/core';
import './../property-list/property'
import { RentalAppService } from '../rental-app.service';
import { GetLoginService } from '../get-login.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-saved-ads',
  templateUrl: './saved-ads.component.html',
  styleUrls: ['./saved-ads.component.css']
})
export class SavedAdsComponent implements OnInit {

  homes:HomeSell[] = [];
  postedHomes:HomeSell[]=[];
  login:string|null=null;
  images: any[] = [];

  constructor(private service:RentalAppService, private getLogin:GetLoginService){}

  ngOnInit(): void {
  this.getHomes();
  this.getPostedAds();
}

async getHomes(): Promise<void> {
  this.getLogin.getLogin().subscribe(login=>{
    this.login=login
})

try {
const data = await firstValueFrom( this.service.getsavedAds(this.login))
      this.homes=data;
     // Fetch images for each home
    for (let home of this.homes) {
      const imagesData = await firstValueFrom(this.service.getImages(home.sellerName));
      home.images = imagesData;
    }
    
  } catch (error) {
    console.error('Error fetching data', error);
  }

}

async getPostedAds():Promise<void>{
  this.getLogin.getLogin().subscribe(login=>{
    this.login=login
})

try {
const data = await firstValueFrom(this.service.getMyAds(this.login))
      this.postedHomes=data;
     // Fetch images for each home
    for (let home of this.postedHomes) {
      const imagesData = await firstValueFrom(this.service.getImages(home.sellerName));
      home.images = imagesData;
    }
    
  } catch (error) {
    console.error('Error fetching data', error);
  }

}
}
