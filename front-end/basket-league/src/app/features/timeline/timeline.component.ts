import { Component } from '@angular/core';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

	public msg : any;
	public value : any = "Hola"

	constructor(private teamService: TeamService) { }
  
	ngOnInit() {
		this.getTweets();
	}

	postTweet(value: string) {
		let tweet = {
			"title" : "Nuevo titulo",
			"msg" : value
		}
		this.teamService.postTeams(tweet).pipe().subscribe(
			(data) => {
				console.log("Tweet enviado")
				console.log(data);
				this.getTweets();
			}
		)
	}
  
	onClick(titleInput: HTMLInputElement) {
	  if (titleInput.value) {
		//this.todoService.addTodo(titleInput.value);
		titleInput.value = "";
	  }
	}
  
	onStatusChange(id: string, newStatus: boolean) {
	  //this.todoService.updateTodoStatus(id, newStatus);
	}
	
	onDelete(id:string){
	  //this.todoService.deleteTodo(id);
	}

	getTweets() {
		this.teamService.getTeams()
		.pipe().subscribe(
		  (data) => {
			  console.log(data)
			  this.msg = data;		
		  }
		);
	}

}
