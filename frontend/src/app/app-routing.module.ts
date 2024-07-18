import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertySaleFormComponent } from './property-sale-form/property-sale-form.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { NewConstructionComponent } from './new-construction/new-construction.component';
import { SellPropertyListComponent } from './sell-property-list/sell-property-list.component';
import { SavedAdsComponent } from './saved-ads/saved-ads.component';

const routes: Routes = [
  {path:'sales-form-app', component:PropertySaleFormComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'rent-property-list', component:PropertyListComponent},
  {path:'sale-property-list' , component:SellPropertyListComponent},
  {path:'login', component:ContentComponent},
  {path:'new-property', component:NewConstructionComponent},
  {path:'saved-ads',component:SavedAdsComponent},
  {path:'', redirectTo:'dashboard', pathMatch:'full'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
