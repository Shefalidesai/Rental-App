import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import  './property-sale-form/postHome';
import { AxiosService } from './axios.service';
import { text } from '@fortawesome/fontawesome-svg-core';
import './property-list/saveLikedAds'

@Injectable({
  providedIn: 'root'
})
export class RentalAppService {

  constructor(private http:HttpClient, private axiosService: AxiosService) { }

  private baseUrl='http://localhost:8080/homes';
  private postApi='http://localhost:8080/homes/createAd';
  private uploadImg = 'http://localhost:8080/api/images';

  data!: string;
  got!:any;


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
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')  // Assuming token is stored in localStorage after login
    });

    return this.http.post(this.postApi, formData);

  }

  getNames(firstName:string): Observable<any> {
    return this.http.get(`http://localhost:8080/firstName/${firstName}`);
  }

  getLogin(login:any):Observable<any>{
    return this.http.get(`http://localhost:8080/login/${login}`);
  }

  getNameAfterLogin(login: any) {
    return this.http.get(`http://localhost:8080/login/${login}/firstName` , {responseType:'text'}
      );
  }

  getId(login:any){
    return this.http.get(`http://localhost:8080/login/${login}/id`);
  }

  saveLikedAds(login:any, data:any):Observable<saveLikedAds[]>{
    return this.http.post<saveLikedAds[]>(`http://localhost:8080/login/save?login=${login}`,data);
  }

  uploadImages(files: File[], formData): Observable<HttpResponse<any>> {
   
    
    
    files.forEach(file => {
      formData.append('files', file, file.name);
      console.log(file,file.name);
      
    });

 

    return this.http.post<any>(`${this.uploadImg}/upload`, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      }),
      observe: 'response'
    }).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(`Error: ${error.message}`);
  }

}
