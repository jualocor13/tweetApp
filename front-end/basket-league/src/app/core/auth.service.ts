import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { LoginData, RegisterData } from './interfaces/login-data.interface';
import { Router } from '@angular/router';
const httpOptions = {
    headers: new HttpHeaders(
		{'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	"Accept": '*/*'}
		)
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private url = 'http://3.248.88.250:3000/auth';
    constructor(private http: HttpClient,private router: Router,) {
    }
    login({username, password}: LoginData) {
		const body = {
			username,
			password
		}


        return this.http.post<any>(
			this.url + '/login',
			body,
			httpOptions
			).pipe().subscribe(
				(data) => {
					console.log(data)
					localStorage.setItem('token', data.accessToken)
					this.router.navigate(['/timeline'])
				}
			)
    }

	register({username, email, password}: RegisterData) {
		const body = {
			username,
			email,
			password
		}

        return this.http.post<any>(
			this.url + '/register',
			body,
			httpOptions
			).pipe().subscribe(
				(data) => {
					console.log(data)
					this.router.navigate(['/login'])
				}
			)
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            return of(result as T);
        };
    }
    private save_token(data : any) {
        if (data.success) {
            localStorage.setItem('token', data.token);
            return;
        }
    }
}
