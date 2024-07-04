import { Component, Input, Output, ViewChild } from '@angular/core';
import { AxiosService } from '../axios.service';
import { RentalAppService } from '../rental-app.service';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent {

  constructor(private axiosService: AxiosService, private service: RentalAppService) {}

  ngOnInit(): void {
  }

 
  }
