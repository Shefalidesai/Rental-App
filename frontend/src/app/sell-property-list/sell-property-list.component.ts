import { Component, OnInit } from '@angular/core';
import { RentalAppService } from '../rental-app.service';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, forkJoin, map, mergeMap, of } from 'rxjs';
import { GetLoginService } from '../get-login.service';
import './../property-list/property'

@Component({
  selector: 'app-sell-property-list',
  templateUrl: './sell-property-list.component.html',
  styleUrls: ['./sell-property-list.component.css']
})
export class SellPropertyListComponent implements OnInit {
  selectedButton: string = 'Sell';  // Changed to 'Sell'
  selectedBhk!: number;
  furnishing: string = '';
  parking: string = '';
  city: string = '';
  homes: HomeSell[] = [];
  filteredHomes: HomeSell[] = [];
  login: string | null = null;
  isLiked: boolean = false;
  showMessage: boolean = false;
  message: string = '';

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
      this.showMessage = true;
          this.message = 'Property saved successfully!';
      this.saveLikeAds(home);
    }
  }

  async getHomeSale(): Promise<void> {
    try {
      const data = await firstValueFrom(this.service.getHomeSell('/category/Sell'));
      this.homes = data;
      this.filteredHomes = data; // Initialize filteredHomes with full list
      await this.fetchImagesForHomes();
      console.log(this.homes);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  fetchImagesForHomes(): Promise<void> {
    const imageObservables = this.filteredHomes.map((home) =>
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

  onBhkChange(input: number) {
    this.selectedBhk = input;
    this.applyFilters();
  }

  onFurnishingChange(input: string) {
    this.furnishing = input;
    this.applyFilters();
  }

  onParkingChange(input: string) {
    this.parking = input;
    this.applyFilters();
  }

  onCityChange(input: string) {
    this.city = input;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredHomes = this.homes
      .filter(home => !this.selectedBhk || home.bhk === this.selectedBhk) // Filter by BHK if selected
      .filter(home => !this.furnishing || home.furnished === this.furnishing) // Filter by furnishing if selected
      .filter(home => !this.parking || home.parking === this.parking) // Filter by parking if selected
      .filter(home => !this.city || home.city === this.city); // Filter by city if selected
    this.fetchImagesForHomes(); // Fetch images for the filtered homes
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
