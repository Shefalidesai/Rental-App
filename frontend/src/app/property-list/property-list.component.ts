import { Component, OnInit } from '@angular/core';
import './property';
import { RentalAppService } from '../rental-app.service';
import { HttpClient } from '@angular/common/http';
import './saveLikedAds';
import { firstValueFrom, forkJoin, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { GetLoginService } from '../get-login.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  selectedButton: string = 'Buy';
  selectedBhk!: number;
  furnishing: string = '';
  parking: string = '';
  city: string = '';
  homes: HomeSell[] = [];
  login: string | null = null;
  isLiked: boolean = false;

  constructor(
    private service: RentalAppService,
    private http: HttpClient,
    private loginservice: GetLoginService
  ) {}

  ngOnInit(): void {
    this.getHomeSale();
    this.loginservice.getLogin().subscribe((login) => {
      this.login = login;
    });
    
  }

  toggleLike(home: HomeSell) {
    this.homes.forEach((h) => (h.isLiked = false));
    home.isLiked = !home.isLiked;
    if (home.isLiked) {
      this.saveLikeAds(home);
    }
  }

  async getHomeSale(): Promise<void> {
    try {
      const data = await firstValueFrom(this.service.getHomeSell('/category/Rent'));
      this.homes = data;
      await this.fetchImagesForHomes();
      console.log(this.homes);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  fetchImagesForHomes(): Promise<void> {
    const imageObservables = this.homes.map((home) =>
      this.service.getImages(home.sellerName).pipe(
        map((imagesData) => {
          home.images = imagesData;
          return home;
        }),
        catchError((error) => {
          console.error(`Error fetching images for ${home.sellerName}`, error);
          return of(home); // Return the home without images in case of error
        })
      )
    );
    return firstValueFrom(forkJoin(imageObservables)).then(() => {});
  }

  selectButton(input: string): void {
    this.selectedButton = input;
    let url = '/category/' + input;
    if (input === 'PG') {
      url = '/category/PG';
    }
    else if(input==='Rent'){
      url='/category/Rent';
    }else{
      url='/category/Commerical'
    }
    this.service.getHomeSell(url).pipe(
      mergeMap((homes: HomeSell[]) => {
        this.homes = homes;
        return this.fetchImagesForHomes();
      })
    ).subscribe();
  }

  onBhkChange(input: number) {
    this.fetchHomesWithImages('/bhk/' + input);
  }

  onFurnishingChange(input: string) {
    this.fetchHomesWithImages('/furnished/' + input);
  }

  onParkingChange(input: string) {
    this.fetchHomesWithImages('/parking/' + input);
  }

  onCityChange(input: string) {
    this.fetchHomesWithImages('/city/' + input);
  }

  fetchHomesWithImages(url: string) {
    this.service.getHomeSell(url).pipe(
      mergeMap((homes: HomeSell[]) => {
        this.homes = homes;
        return this.fetchImagesForHomes();
      })
    ).subscribe();
  }

  async saveLikeAds(ad: saveLikedAds) {
    try {
      const postData = {
        sellerName: ad.sellerName,
        towerName: ad.towerName,
        price: ad.price,
        address: ad.address,
        landMark: ad.landMark,
        carpetArea: ad.carpetArea,
        bhk: ad.bhk,
        town: ad.towerName,
        furnished: ad.furnished,
        ownerType: ad.ownerType,
        city: ad.city,
        floorNo: ad.floorNo,
        totalFloors: ad.totalFloors,
        parking: ad.parking,
        phoneNo: ad.phoneNo,
        category: ad.category,
        construction: ad.construction,
      };

      const savedAdData = await firstValueFrom(this.service.saveLikedAds(postData, this.login));
      console.log(savedAdData);
    } catch (error) {
      console.error('Error saving ad', error);
    }
  }
}
