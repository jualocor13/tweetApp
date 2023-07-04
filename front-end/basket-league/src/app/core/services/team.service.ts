import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders(
		{'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		"Accept": '*/*',
		"Authorization": "Bearer " + localStorage.getItem('token') }
		)
};
@Injectable({
  providedIn: 'root'
})
export class TeamService {


	private url = 'http://3.248.88.250:3000/teams';
  constructor(
	private http: HttpClient,private router: Router
  ) {}

	getTeams()  {
		return this.http.get(
			this.url,
			httpOptions
		)
	}


	postTeams(tweet : any)  {
		console.log(localStorage.getItem('token'))
		return this.http.post(
			this.url,
			{
				"title" :tweet.title || 'titulo' ,
				"msg" : tweet.msg
			},
			httpOptions
		)
	}

}
