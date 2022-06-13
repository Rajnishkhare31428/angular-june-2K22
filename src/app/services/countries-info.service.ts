import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesInfoService {

  constructor() { }

  getCountryList() {
    return [
      'India',
      'Pakistan',
      'Nepal',
      'Bhutan',
      'Myanmar',
      'China'
    ];
  }
}
