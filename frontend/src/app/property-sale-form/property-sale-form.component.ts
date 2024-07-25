import { Component, OnInit } from '@angular/core';
import { RentalAppService } from '../rental-app.service';
import './postHome';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { GetLoginService } from '../get-login.service';

@Component({
  selector: 'app-property-sale-form',
  templateUrl: './property-sale-form.component.html',
  styleUrls: ['./property-sale-form.component.css']
})
export class PropertySaleFormComponent implements OnInit  {
  saleForm!: FormGroup;
  showMessage: boolean = false;
  message: string = '';
  postHomeSale!:postHome[];
  selectedFiles!: File[];
  message1: string = '';
  loginName!:string|null;
 

  constructor(private service:RentalAppService, private router:Router, private getLogin:GetLoginService
    , private fb: FormBuilder,private http: HttpClient){
   
  }
  
  ngOnInit(): void {
    this.saleForm = this.fb.group({
      sellerName: ['', Validators.required],
      towerName: ['', Validators.required],
      price: [0, Validators.required],
      address: ['', Validators.required],
      landMark: [''],
      carpetArea: 0,
      town:[''],
      bhk: 0,
      furnished: [''],
      ownerType: [''],
      city: [''],
      floorNo: [0, Validators.required],
      totalFloors: [0, Validators.required],
      parking: [''],
      phoneNo: [0, Validators.required],
      category: [''],
      construction:['']
      
    }); 

    this.getLogin.getLogin().subscribe(login => {
      this.loginName=login
      if (!login) {
        this.router.navigate(['/login']);
      }
    });
   
  }

  
  onSubmit(): void {
    if (this.saleForm.valid) {
      const formValues = this.saleForm.value;
      console.log(formValues);
      
      this.service.postHomeSale(formValues).subscribe(
        response => {
          this.showMessage = true;
          this.message = 'Property posted successfully!';
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 2000);
        },
        error => {
          this.showMessage = true;
          this.message = 'Failed to post property.';
        }
      );

      this.service.saveMyAds(formValues,this.loginName).subscribe(
        response => {console.log('Response from second URL:', response);},
        error=>{console.log(error);
        }
      )
    }
  }


  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }
  
    onUpload(): void {  
      
      if (this.selectedFiles.length === 0) {
        this.message1 = 'Please select files to upload.';
        return;
      }
  
      this.service.uploadImages(this.selectedFiles,  this.saleForm.value.sellerName).subscribe(
        response => {
          if (response.status === 200) {
            this.message = 'Images posted successfully!';
            setTimeout(() => {
             
            }, 2000);
          } else {
            this.message = 'Images failed to post!';
            setTimeout(() => {
            }, 2000);
          }
        },
        error => {
          this.message1 = `Error: ${error}`;
        }
      );
    }

    
}
