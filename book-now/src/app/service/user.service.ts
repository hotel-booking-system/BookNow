import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.models';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  // Cadastrar Usuário
  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // Listar Usuários
  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Buscar Usuário
  getUser(id: any): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Atualizar Usuário
  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data)
  }

  // Excluir Usuário
  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Excluir todos os usuários
  deleteAllUser(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }

  // Buscar usuário por Email
  findByEmail(email: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}`);
  }

}
