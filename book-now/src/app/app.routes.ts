import { Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { HotelRegisterComponent } from './Components/hotel/hotel-register/hotel-register.component';
import { LoginComponent } from './Components/login/login.component';
import { ChangePasswordComponent } from './Components/users/change-password/change-password.component';
import { UserProfileComponent } from './Components/users/user-profile/user-profile.component';
import { UserRegisterComponent } from './Components/users/user-register/user-register.component';
import { UserSettingsComponent } from './Components/users/user-settings/user-settings.component';


export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'Home Component',
    component: HomeComponent
  },

  { path: 'register', component: UserRegisterComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-settings', component: UserSettingsComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'hotel-register', component: HotelRegisterComponent },



];
