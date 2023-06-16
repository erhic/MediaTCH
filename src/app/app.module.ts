import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes,RouterModule }from '@angular/router';

import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { ForgotPassPageComponent } from './forgot-pass-page/forgot-pass-page.component';
import { ResetPassPageComponent } from './reset-pass-page/reset-pass-page.component';
import { CreateNewPassPageComponent } from './create-new-pass-page/create-new-pass-page.component';
import { CreateProfilePageComponent } from './create-profile-page/create-profile-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UploadsListPageComponent } from './uploads-list-page/uploads-list-page.component';

const routes: Routes = [
  {path:'sign-up',component:SignUpPageComponent},
  {path:'sign-up-page',component:SignUpPageComponent},
  {path:'sign-up-page',component:LoginPageComponent},
  {path:'sign-up-page',component:HomePageComponent},
  {path:'sign-up-page',component:ProfilePageComponent},
  {path:'sign-up-page',component:ForgotPassPageComponent},
  {path:'sign-up-page',component:ResetPassPageComponent},
  {path:'sign-up-page',component:CreateNewPassPageComponent},
  {path:'sign-up-page',component:UploadPageComponent},
  {path:'sign-up-page',component:CreateProfilePageComponent},
  {path:'sign-up-page',component:UserProfilePageComponent},
  {path:'sign-up-page',component: UploadsListPageComponent},
  

];

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
    UserProfilePageComponent,
    UploadsListPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
