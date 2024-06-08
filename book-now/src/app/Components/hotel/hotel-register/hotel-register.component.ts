import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, NG_VALIDATORS } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HotelService } from '../../../service/hotel.service';
import { Hotel } from '../../../models/hotel.models';
import { HeaderComponent } from "../../header/header.component";

const hotelForm = new FormGroup({
  'title': new FormControl(),
  'email': new FormControl(),
  'password': new FormControl()
});

@Component({
  selector: 'app-hotel-register',
  standalone: true,
  templateUrl: './hotel-register.component.html',
  styleUrl: './hotel-register.component.css',
  imports: [
    HeaderComponent,
    FormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class HotelRegisterComponent implements OnInit {

  hotel = new Hotel();

  hotelForm!: FormGroup;

  constructor(private hotelService: HotelService) {

  }
  onFileChange(event: any): void {
    this.hotel.images = event.target.files; // Captura os arquivos de imagem selecionados pelo usuário
  }

  ngOnInit(): void {
    this.hotelForm = new FormGroup({
      title: new FormControl(this.hotel.title, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  get title() {
    return this.hotelForm.get('title');
  }

  onSubmit() {
    console.log('Hotel cadastrado: ', this.hotel);
  }

  registerHotel(): void {
    // chamar o método do serviço para cadatrar o usuário
    this.hotelService.registerHotel(this.hotel).subscribe({
      next: (response) => {
        // lógica para tratar a resposta do servidor (ex.: exibir msg de sucesso)
        console.log('Acomodação cadastrada: ', response);
      },
      error: (error) => {
        // lógica para tratar erros (ex.: exibir msg de erro)
        console.error('Erro ao cadastrar acomodação: ', error);
      }
    })
  }

}

