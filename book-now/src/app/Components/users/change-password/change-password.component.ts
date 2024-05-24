import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  changePasswordForm() {

  }

}
