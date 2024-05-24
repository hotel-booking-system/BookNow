import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [
    HeaderComponent,
    ChangePasswordComponent,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    // Inicializar qualquer dado necessário para o componente
  }

  settingsForm() {

  }

  // Função para alterar a senha
  changePassword() {
    // Implementar a lógica para alterar a senha do usuário
  }

  // Função para incluir foto
  uploadPhoto(event: any) {
    // Implementar a lógica para upload da foto do usuário
  }

  // Função para alterar outros dados pessoais
  updatePersonalData() {
    // Implementar a lógica para atualizar os dados pessoais do usuário
  }

}
