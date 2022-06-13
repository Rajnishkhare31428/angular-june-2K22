import { Component, OnInit } from '@angular/core';
import { CountriesInfoService } from '../services/countries-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  countryList: any;
  myName = 'Rajnish khare';

  constructor(
    private countryService: CountriesInfoService
  ) { }

  ngOnInit(): void {
    this.countryList = this.countryService.getCountryList();
  }

  // getCountryList() {
  //   return [
  //     'India',
  //     'Pakistan',
  //     'Nepal',
  //     'China'
  //   ];
  // }
}
