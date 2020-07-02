import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movies} from './model.film';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Filmservice {

  constructor(private httpclient: HttpClient) { }

  findAllMovies(): Observable<Movies[]>{
  console.log('passage dans service');
  const url = 'http://192.168.1.81/videotheque/public/index.php/api/videos';
  return this.httpclient.get<Movies[]>(url);
  }

  findMovieByName(name: string): Observable<any> {
    const url1 = '${http://192.168.1.81/videotheque/public/index.php/api/videos?name=}/${name}';
    return this.httpclient.get<any>(url1);
  }

}
