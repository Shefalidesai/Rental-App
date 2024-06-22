import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertySaleFormComponent } from './property-sale-form/property-sale-form.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path:'sales-app', component:PropertySaleFormComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'property-list', component:PropertyListComponent},
  {path:'login', component:LoginFormComponent},
  {path:'', redirectTo:'dashboard', pathMatch:'full'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
