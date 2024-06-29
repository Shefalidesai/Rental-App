import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  './property-sale-form/postHome';
import { AxiosService } from './axios.service';

@Injectable({
  providedIn: 'root'
})
export class RentalAppService {

  constructor(private http:HttpClient, private axiosService: AxiosService) { }

  private baseUrl='http://localhost:8080/homes';
  private postApi='http://localhost:8080/homes/createAd';
  data!: string;


  getHomeSales(endpoint: string = ''):Observable<HomeSales[]>{
    return this.http.get<HomeSales[]>(`${this.baseUrl}${endpoint}`);
  }

  postHomeSale(postHome:postHome):Observable<any>{
    const formData:FormData=new FormData();

    formData.append('sellerName', postHome.sellerName);
    formData.append('towerName', postHome.towerName);
    formData.append('price', postHome.price.toString());
    formData.append('address', postHome.address);
    formData.append('address', postHome.landMark);
    formData.append('carpetArea', postHome.carpetArea.toString());
    formData.append('bhk', postHome.bhk.toString());
    formData.append('furnished', postHome.furnished);
    formData.append('ownerType', postHome.ownerType);
    formData.append('address', postHome.city);
    formData.append('address', postHome.floorNo.toString());
    formData.append('address', postHome.totalFloors.toString());
    formData.append('address', postHome.parking);
    formData.append('contactNumber', postHome.phoneNo.toString());
    formData.append('purpose', postHome.category);
    formData.append('town',postHome.town);
    
    // for (let i = 0; i < postHome.images.length; i++) {
    //   formData.append('images', postHome.images[i], postHome.images[i].name);
    // }

    // Adding Authorization header
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')  // Assuming token is stored in localStorage after login
    });

    return this.http.post(this.postApi, formData);

  }

  getNames(firstName:string): Observable<any> {
    return this.http.get(`/firstName/${firstName}`);
  }
}
