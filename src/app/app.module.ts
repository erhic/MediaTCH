import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule }from './app-routing.module';

import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { ForgotPassPageComponent } from './pages/forgot-pass-page/forgot-pass-page.component';
import { ResetPassPageComponent } from './pages/reset-pass-page/reset-pass-page.component';
import { CreateNewPassPageComponent } from './pages/create-new-pass-page/create-new-pass-page.component';
import { CreateProfilePageComponent } from './pages/create-profile-page/create-profile-page.component';
import { UploadsListPageComponent } from './pages/uploads-list-page/uploads-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    UploadPageComponent,
    ForgotPassPageComponent,
    ResetPassPageComponent,
    CreateNewPassPageComponent,
    CreateProfilePageComponent,
    UploadsListPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 