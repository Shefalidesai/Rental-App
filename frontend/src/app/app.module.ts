import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { ContentComponent } from './content/content.component';

import { AxiosService } from './axios.service';
import { HomepageComponent } from './homepage/homepage.component';
import { PropertySaleFormComponent } from './property-sale-form/property-sale-form.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { SilderComponent } from './silder/silder.component';
import { HttpClientModule } from '@angular/common/http';
import { RentalAppService } from './rental-app.service';
import { SectionanimationComponent } from './sectionanimation/sectionanimation.component';
import { SellPropertyListComponent } from './sell-property-list/sell-property-list.component';
import { NewConstructionComponent } from './new-construction/new-construction.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { SavedAdsComponent } from './saved-ads/saved-ads.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MyPostComponent } from './my-post/my-post.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HeaderComponent,
    LoginFormComponent,
    AuthContentComponent,
    ContentComponent,
    HomepageComponent,
    PropertySaleFormComponent,
    PropertyListComponent,
    DashboardComponent,
    SilderComponent,
    SectionanimationComponent,
    SellPropertyListComponent,
    NewConstructionComponent,
    MessageBoxComponent,
    SavedAdsComponent,
    MyPostComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatGridListModule,
    MatTabsModule
  
  ],
  providers: [AxiosService,RentalAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
