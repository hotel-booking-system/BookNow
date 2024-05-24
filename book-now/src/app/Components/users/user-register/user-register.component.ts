import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, NG_VALIDATORS } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../../../models/user.models';
import { UserService } from '../../../service/user.service';
import { HeaderComponent } from "../../header/header.component";

const userForm = new FormGroup({
  'name': new FormControl(),
  'email': new FormControl(),
  'password': new FormControl()
});

@Component({
    selector: 'app-user-register',
    standalone: true,
    templateUrl: './user-register.component.html',
    styleUrl: './user-register.component.scss',
    imports: [
      HeaderComponent,
      FormsModule,
      RouterModule,
      HttpClientModule
    ]
})
export class UserRegisterComponent implements OnInit {

  user = new User();

  userForm!: FormGroup;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  get name() {
    return this.userForm.get('name');
  }

  onSubmit() {
    console.log('Usuário cadastrado: ', this.user);
  }

  registerUser(): void {
    // chamar o método do serviço para cadatrar o usuário
    this.userService.registerUser(this.user).subscribe({
      next: (response) => {
        // lógica para tratar a resposta do servidor (ex.: exibir msg de sucesso)
        console.log('Usuário cadastrado: ', response);
      },
      error: (error) => {
        // lógica para tratar erros (ex.: exibir msg de erro)
        console.error('Erro ao cadastrar usuário: ', error);
      }
    })
  }

}
