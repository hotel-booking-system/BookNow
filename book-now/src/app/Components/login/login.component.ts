import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../../service/login.service';
import { User } from '../../models/user.models';
import { getCookie } from 'typescript-cookie';
import { NgIf } from '@angular/common';

const login = new FormGroup({
  email: new FormControl('', {nonNullable: true}),
  password: new FormControl('', {nonNullable: true}),
});

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  authStatus: string = "";
  user = new User();

  constructor(private loginService: LoginService, private router: Router) {

   }

  ngOnInit(): void {

  }

  validateUser(loginForm: NgForm) {
    this.loginService.validateLoginDetails(this.user).subscribe(
      responseData => {
        window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);
        this.user = <any> responseData.body;
        this.user.authStatus = 'AUTH';
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.user));
        let xsrf = getCookie('XSRF-TOKEN')!;
        window.sessionStorage.setItem("XSRF-TOKEN",xsrf);
        this.router.navigate(['user-profile']);
      });

  }

  /*
  user = new User();

  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  validateUser(loginForm: NgForm) {
    this.loginService.validateLoginDetails(this.user).subscribe({
      next: (response) => {
        console.log('Usuário logado: ', response);
        this.router.navigate(['/user-profile']);
      },
      error: (error) => {
        console.error('Formulário inválido: ', error);
      }
    });
  }*/

}
