import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { User } from '../../../models/user.models';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HotelListComponent } from '../../hotel/hotel-list/hotel-list.component';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../../../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterModule,
    HttpClientModule,
    HotelListComponent,
    CommonModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  user = new User();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    /* if(sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    } */
  }

}
