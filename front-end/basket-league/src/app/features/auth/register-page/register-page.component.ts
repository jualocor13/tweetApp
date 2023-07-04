import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/auth.service';
import { LoginData, RegisterData } from 'src/app/core/interfaces/login-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  register(data: RegisterData) {
    this.authService.register(data)
  }
}