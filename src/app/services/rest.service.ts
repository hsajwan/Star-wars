import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public url: string = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  getData(path) {
    let api = this.url.concat(path)
    return this.http.get(api);
  }

}
