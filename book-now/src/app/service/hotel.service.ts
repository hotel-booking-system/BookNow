import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.models';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiUrl = 'http://localhost:8080/hotels';

  constructor(
    private http: HttpClient,
    // private isAuthorized: boolean
  ) { }

  /* Listar Hotéis cadastrados */
  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  // Cadastrar Hotel
  registerHotel(data: any): Observable<any> {
    // const auht = this.isAuthorized ? 'authorized ' : 'unauthorized';
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // Buscar Hotel
  getHotel(id: any): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/${id}`);
  }

  // Atualizar Hotel
  updateHotel(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data)
  }

  // Excluir Hotel
  deleteHotel(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Excluir todos os hotéis
  deleteAllHotel(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }

  // Buscar Hotel por Nome
  findByName(name: any): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}?name=${name}`);
  }

}
