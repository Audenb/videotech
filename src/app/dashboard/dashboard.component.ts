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
  data: Array<Movies>;
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
    this.data = data['hydra:member'];
    this.totalRecord = data['hydra:member'].length;});

  }


  findMovieByName(movieName: string){
    if (movieName === undefined || ''){
      console.log('passage dans findmoviebyname puis all movies');
      this.allMovies()
    }else {
      console.log('passage dans findmoviebyname ');
      console.log('moviename ' + movieName);
      console.log('moviename type' + typeof movieName);

      this.filmservice.findMovieByName(movieName).subscribe((data) => {
        console.log(data);
        this.data = data['hydra:member'];
        this.totalRecord = data['hydra:member'].length;
      });
    }
  }

}
