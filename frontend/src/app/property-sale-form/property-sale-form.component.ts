import { Component, OnInit } from '@angular/core';
import { RentalAppService } from '../rental-app.service';
import './postHome';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
 

  constructor(private service:RentalAppService, private fb: FormBuilder,private http: HttpClient){
   
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
            window.location.reload();
          }, 2000);
        },
        error => {
          this.showMessage = true;
          this.message = 'Failed to post property.';
        }
      );
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
