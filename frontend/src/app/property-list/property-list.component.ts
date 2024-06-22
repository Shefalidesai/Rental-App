import { Component, Input, OnInit } from '@angular/core';
import './property'
import { faBathtub, faBed, faBuilding, faCoffee, faCompass, faCouch, faInfoCircle, faRuler } from '@fortawesome/free-solid-svg-icons';
import { RentalAppService } from '../rental-app.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent  implements OnInit {
  faBed= faBed;
  faBath=faBathtub;
  faSofa=faCouch;
  faRuler=faRuler;
  faFalt= faBuilding;
  faCompass=faCompass;
  faInfo=faInfoCircle;
  homes:HomeSales[] = [];

  constructor(private service:RentalAppService) { }

  ngOnInit(): void {
    this.getHomeSale();
   }

  getHomeSale():void{
    this.service.getHomeSales().subscribe((data:HomeSales[])=>{
      this.homes=data;
      console.log(data);
      
    })
  }

  // contactOwner(owner: any) {
  //   alert(`Contacting ${owner.phoneNo}`);
  // }
}