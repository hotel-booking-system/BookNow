import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() hotel: any; // Interface or type for your hotel data structure

}
