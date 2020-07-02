import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movies} from './model.film';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Filmservice {

  httpOptions = {
    headers: new HttpHeaders({'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' })
  };

  constructor(private httpclient: HttpClient) { }

  findAllMovies(): Observable<Movies[]>{
  console.log('passage dans service');
  const url = 'https://cors-anywhere.herokuapp.com/http://51.91.106.188/videotheque/public/index.php/api/videos';
  // const url = 'http://192.168.1.81/videotheque/public/index.php/api/videos';
    console.log('url' + url);
  return this.httpclient.get<Movies[]>(url, this.httpOptions);
  }

  findMovieByName(name: string): Observable<Movies[]> {
    console.log('passage dans service findMovieByName');
    const url1 ='https://cors-anywhere.herokuapp.com/http://51.91.106.188/videotheque/public/index.php/api/videos?name';
    const findByNameUrl = `${url1}=${name}`;
    console.log(findByNameUrl);
    // const url1 = '${http://192.168.1.81/videotheque/public/index.php/api/videos?name=}/${name}';
    return this.httpclient.get<Movies[]>(findByNameUrl, this.httpOptions);
  }

}
