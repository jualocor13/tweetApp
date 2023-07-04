import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(private teamService: TeamService) { }

	msg : any;
	
	ngOnInit() {
		this.teamService.getTeams()
		.pipe().subscribe(
		  (data) => {
			  console.log(data)
			  this.msg = data;		
		  }
		);
	  }

}
