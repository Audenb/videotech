import { Component, OnInit } from '@angular/core';
import { Filmservice } from '../filmservice.service';
import { Movies } from '../model.film';
import {isEmpty} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movieName: '';
  movies: Movies[];
  data: Array<any>;
  movie: Movies;
  totalRecord: number;
  page: number;

  constructor(private filmservice: Filmservice) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.findMovieByName(this.movieName);
  }

  allMovies(){
  console.log('passage dans allmovies')
  this.filmservice.findAllMovies()
  .subscribe((data) => {
    console.log(data);
    this.data = data;
    this.totalRecord = data.length;});

  }


  findMovieByName(movieName: string){
    if (movieName === ''){
      this.allMovies()
    }else {
      this.filmservice.findMovieByName(movieName).subscribe((data) => {
        console.log(data);
        this.data = data;
        this.totalRecord = data.length;
        this.page = Math.round(this.totalRecord/15+1)});
    }
  }

}
