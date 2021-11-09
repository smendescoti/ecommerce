import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  formLogin = new FormGroup({
    email: new FormControl('', []),
    senha: new FormControl('', [])
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    window.location.href = "/finalizar-pedido";
  }

}
