import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { LoginData } from 'src/app/core/interfaces/login-data.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
	constructor(
		private readonly authService: AuthService,
		private readonly router: Router
	  ) {}
	
	  ngOnInit(): void {}
	
	  login(loginData: LoginData) {
		let data = this.authService.login(loginData);
	  }
}
