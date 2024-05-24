import { Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { UserProfileComponent } from './Components/users/user-profile/user-profile.component';
import { UserRegisterComponent } from './Components/users/user-register/user-register.component';
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


];
