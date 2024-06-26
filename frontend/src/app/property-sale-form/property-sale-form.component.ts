import { Component, OnInit } from '@angular/core';
import { RentalAppService } from '../rental-app.service';
import './postHome';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  postHomeSale: postHome={
    sellerName: ' ',
    towerName: ' ',
    price: 0,
    address: ' ',
    landMark:' ',
    carpetArea: 0,
    bhk: 0,
    town:' ',
    furnished: ' ',
    ownerType: ' ',
    city: ' ',
    floorNo: 0,
    totalFloors: 0,
    parking:' ',
    phoneNo:0,
    category:' ',
    construction:'',
    images: [],
  }

  constructor(private service:RentalAppService, private fb: FormBuilder,private http: HttpClient){}
  
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
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.postHomeSale.images = Array.from(event.target.files);
    }
  }

  
    onSubmit() {
      if (this.saleForm.valid) {
        const formData = new FormData();
        
        // Append all form fields
        Object.keys(this.saleForm.controls).forEach(key => {
          formData.append(key, this.saleForm.get(key)?.value);
        });
        
        // Append images
        this.postHomeSale.images.forEach((image: File, index: number) => {
          formData.append('images', image, image.name);
        });
        
        this.http.post('http://localhost:8080/homes/createAd', this.saleForm.value)
          .subscribe(response => {
            console.log('Form submitted successfully!', response);
            this.message = 'Form submitted successfully!';
            this.showMessage = true;
            

    setTimeout(() => {
      this.showMessage = false;
      window.location.reload();
    }, 3000); // Hide the message after 3 seconds

          }, error => {
            console.error('Error submitting form', error);
          });
        }
    }
}
