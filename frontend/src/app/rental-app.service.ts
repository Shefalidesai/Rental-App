import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  './property-sale-form/postHome';

@Injectable({
  providedIn: 'root'
})
export class RentalAppService {

  constructor(private http:HttpClient) { }

  private apiUrl='http://localhost:8080/homes';
  private postApi='http://localhost:8080/homes/createAd';

  

  getHomeSales():Observable<HomeSales[]>{
    return this.http.get<HomeSales[]>(this.apiUrl);
  }

  postHomeSale(postHome:postHome):Observable<any>{
    const formData:FormData=new FormData();

    formData.append('sellerName', postHome.sellerName);
    formData.append('towerName', postHome.towerName);
    formData.append('price', postHome.price.toString());
    formData.append('address', postHome.address);
    formData.append('address', postHome.landMark);
    formData.append('area', postHome.area);
    formData.append('bhk', postHome.bhk);
    formData.append('furnished', postHome.furnished);
    formData.append('ownerType', postHome.ownerType);
    formData.append('address', postHome.location);
    formData.append('address', postHome.floorNo.toString());
    formData.append('address', postHome.totalFloors.toString());
    formData.append('address', postHome.parking);
    formData.append('contactNumber', postHome.phoneNo.toString());
    formData.append('purpose', postHome.category);
    
    
    // for (let i = 0; i < postHome.images.length; i++) {
    //   formData.append('images', postHome.images[i], postHome.images[i].name);
    // }

    // Adding Authorization header
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')  // Assuming token is stored in localStorage after login
    });

    return this.http.post(this.postApi, formData);

  }

}
