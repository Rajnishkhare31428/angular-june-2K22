import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getDataFromApi() {
    let url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    return this.http.get(url);
  }
}
