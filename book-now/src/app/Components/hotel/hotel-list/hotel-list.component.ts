import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Hotel } from '../../../models/hotel.models';
import { HotelService } from '../../../service/hotel.service';
import { HotelRegisterComponent } from '../hotel-register/hotel-register.component';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [
    CommonModule,
    HotelRegisterComponent,
    RouterModule
  ],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss'
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[] = [];
  selectedHotel: Hotel | null = null;

  constructor(private router: Router, private hotelService: HotelService) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  getHotels(): Hotel[] {
    return this.hotels;
  }

  loadHotels(): void {
    this.hotelService.getHotels().subscribe((hotels) => {
      this.hotels = hotels;
    });
  }

  // Cadastra um novo hotel
  addNewHotel(): void {
    this.router.navigate(['/register-hotel']);
  }

  // Busca Hotel por ID e retorna os detalhes
  openDetailsModal(id: number) {
    this.selectedHotel = null; // Reset selected hotel
    this.hotelService.getHotel(id).subscribe({
      next: (hotel) => {
        this.selectedHotel = hotel;
      },
      error: (error) => {
        console.error("Erro a buscar hotel: ", error);
      }
    });
  }

  // Atualizar informações do Hotel
  editHotel(id: number, hotel: any) {
    this.hotelService.updateHotel(id, hotel).subscribe({
      next: () => {
        this.router.navigate(['/register-hotel']);
      },
      error: (error) => {
        console.error("Erro a buscar hotel: ", error);
      }
    });

  }

  // Excluir Hotel por ID
  deleteHotel(id: number): void {
    this.hotelService.deleteHotel(id).subscribe({
      next: (response) => {
        // Atualiza a lista após a exclusão
        this.loadHotels();
        console.info("Hotel excluído com sucesso!", response);
      },
      error: (error) => {
        console.error("Erro a excluir hotel: ", error);
      }
    });
  }

}
