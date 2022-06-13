import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CountriesInfoService } from '../services/countries-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  constructor(
    private countryService: CountriesInfoService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getDataFromApi().subscribe(
      (response: any) => {
        this.data = response.data;
        console.log(this.data);
      },
      (error) => {

      }
    );
  }

}

