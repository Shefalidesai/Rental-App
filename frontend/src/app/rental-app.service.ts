import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import  './property-sale-form/postHome';
import { AxiosService } from './axios.service';
import './property-list/saveLikedAds'

@Injectable({
  providedIn: 'root'
})

export class RentalAppService {

  constructor(private http:HttpClient, private axiosService: AxiosService) { }

  private baseUrl='http://localhost:8080/homes';
  private postApi='http://localhost:8080/homes/saveAd';
  private uploadImg= 'http://localhost:8080/api/images';
  private apiUrl='http://localhost:8080/login/save';

  getHomeSales(endpoint: string = ''):Observable<HomeSales[]>{
    return this.http.get<HomeSales[]>(`${this.baseUrl}${endpoint}`);
  }

  postHomeSale(formValues:any): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    console.log(formValues);
    return this.http.post<any>(`${this.postApi}`, formValues, { headers });
  }

  getNames(firstName:string): Observable<any> {
    return this.http.get(`http://localhost:8080/firstName/${firstName}`);
  }

  getLogin(login:any):Observable<any>{
    return this.http.get(`http://localhost:8080/login/${login}`);
  }

  getNameAfterLogin(login: any) {
    return this.http.get(`http://localhost:8080/login/${login}/firstName` , {responseType:'text'});
  }

  getId(login:any){
    return this.http.get(`http://localhost:8080/login/${login}/id`);
  }

  saveLikedAds(data:any, login:any ):Observable<saveLikedAds[]>{
    console.log(login,"-login");
    const url = `${this.apiUrl}?login=${login}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(url, data, { headers });
   }

   getsavedAds(login:any):Observable<HomeSales[]>{
    const url=`http://localhost:8080/login/savedAds?login=${login}`;
    return this.http.get<HomeSales[]>(url);
  }

  uploadImages(files: File[], sellerName: any): Observable<HttpResponse<any>> {
    const formData:FormData=new FormData();
    formData.append('sellerName',sellerName);
    console.log(sellerName); 
    
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

  getImages(sellerName: string): Observable<any> {
    return this.http.get(`${this.uploadImg}/sellerName/${sellerName}`);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(`Error: ${error.message}`);
  }



}
