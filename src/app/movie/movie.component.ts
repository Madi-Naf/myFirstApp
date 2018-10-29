import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

	public allMovies: Movie[];

	private showMovies: boolean = true;
	public redOrGreen: string = "green-class";

  	constructor() { 
		this.allMovies = [
			{
				title: 'saw I',
				img:'src/assets/img/saw_I.jpg',
				year: 2004
			},
			{
				title: 'saw II',
				img:'src/assets/img/saw_II.jpg',
				year: 2005
			},
			{
				title: 'saw III' ,
				img:'src/assets/img/saw_III.jpg',
				year: 2006
			},
			{
				title: 'saw IV' ,
				img:'src/assets/img/saw_VI.jpg',
				year: 2007
			},
			{
				title: 'saw V' ,
				img:'src/assets/img/saw_V.jpg',
				year: 2008
			},
			{
				title: 'saw VI' ,
				img:'src/assets/img/saw_VI.jpg',
				year: 2009
			}
		]
	  }

	public ngOnInit(): void{
	}

	getShowMovies(): void{
		if(this.showMovies){
			this.showMovies = false;
			this.redOrGreen = 'red-class' ;
		}else{
			this.showMovies = true;
			this.redOrGreen = 'green-class';
		}
	}

}
