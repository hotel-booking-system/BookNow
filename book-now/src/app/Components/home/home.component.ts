import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() hotel: any; // Interface or type for your hotel data structure
  faUmbrellaBeach = faUmbrellaBeach;
}
