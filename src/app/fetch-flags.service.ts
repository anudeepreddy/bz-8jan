import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchFlagsService {

  constructor(private http: HttpClient) { }
  getFlags(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
