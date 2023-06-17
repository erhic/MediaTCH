import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { ForgotPassPageComponent } from './forgot-pass-page/forgot-pass-page.component';
import { ResetPassPageComponent } from './reset-pass-page/reset-pass-page.component';
import { CreateNewPassPageComponent } from './create-new-pass-page/create-new-pass-page.component';
import { CreateProfilePageComponent } from './create-profile-page/create-profile-page.component';
import { ProfilePageComponent} from './profile-page/profile-page.component';
import { UploadsListPageComponent } from './uploads-list-page/uploads-list-page.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'signup',component:SignUpPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'home',component:HomePageComponent},
  {path:'forgotpassword',component:ForgotPassPageComponent},
  {path:'resetpassword',component:ResetPassPageComponent},
  {path:'createpassword',component:CreateNewPassPageComponent},
  {path:'upload',component:UploadPageComponent},
  {path:'createprofile',component:CreateProfilePageComponent},
  {path:'userprofile',component:ProfilePageComponent},
  {path:'uploadlist',component: UploadsListPageComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
